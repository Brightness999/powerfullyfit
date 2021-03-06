import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  Res,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';

import { ExternalAssetService } from './external-asset.service';

import { CreateExternalAssetDto } from './dto/create-external-asset.dto';
import { UpdateExternalAssetDto } from './dto/update-external-asset.dto';

import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

const getDockerHost = require('get-docker-host');
const isInDocker = require('is-in-docker');

const ip = require('ip');

@Controller('external-asset')
export class ExternalAssetController {
  constructor(private readonly externalAssetService: ExternalAssetService) {}

  @Post('file/:id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const name = file.originalname.split('.')[0];
          const fileExtName = extname(file.originalname);

          callback(null, `${name}${new Date().getTime()}${fileExtName}`);
        },
      }),
    }),
  )
  async uploadedFile(@UploadedFile() file, @Body() user: any, @Param('id', ParseIntPipe) id: number) {
    let checkDocker = () => {
      return new Promise((resolve, reject) => {
        if (isInDocker()) {
          getDockerHost((error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          });
        } else {
          resolve(null);
        }
      });
    };

    let addr = await checkDocker();

    console.log(addr);

    if (addr) {
      return this.externalAssetService.update(id, {
        type: 'image',
        url:
          'https://app.powerfullyfittraining.com' +
          '/api/external-asset/' +
          file.filename,
        thumbnail: '',
      }, user);
    }

    // return this.externalAssetService.create({
    //   type: 'image',
    //   url: 'http://' + ip.address() + '/api/external-asset/' + file.filename,
    //   thumbnail: '',
    // });
    return this.externalAssetService.update(id, {
      type: 'image',
      url: 'http://localhost:3000/api/external-asset/' + file.filename,
      thumbnail: '',
    }, user);
  }

  @Post()
  saveAsset(@Body() createExternalAssetDto: CreateExternalAssetDto) {
    return this.externalAssetService.create(createExternalAssetDto);
  }

  @Get(':imagename')
  getImage(@Param('imagename') image, @Res() res) {
    const response = res.sendFile(image, { root: './uploads' });
    return {
      status: HttpStatus.OK,
      data: response,
    };
  }
}
