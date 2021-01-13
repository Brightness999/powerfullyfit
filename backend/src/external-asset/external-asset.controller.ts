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
} from '@nestjs/common';

import { ExternalAssetService } from './external-asset.service';

import { CreateExternalAssetDto } from './dto/create-external-asset.dto';
import { UpdateExternalAssetDto } from './dto/update-external-asset.dto';

import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('external-asset')
export class ExternalAssetController {
  constructor(private readonly externalAssetService: ExternalAssetService) {}

  @Post('file')
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
  async uploadedFile(@UploadedFile() file) {
    return this.externalAssetService.create({
      type: 'image',
      url: 'http://localhost:4000/api/external-asset/' + file.filename,
    });
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