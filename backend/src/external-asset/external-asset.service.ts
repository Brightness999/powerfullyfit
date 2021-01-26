import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ExternalAsset } from './entities/external-asset.entity';

import { CreateExternalAssetDto } from './dto/create-external-asset.dto';
import { UpdateExternalAssetDto } from './dto/update-external-asset.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ExternalAssetService {
  constructor(
    @InjectRepository(ExternalAsset)
    private readonly externalAssetRepository: Repository<ExternalAsset>,
    private readonly jwtService: JwtService,
  ) {}

  create(createExternalAssetDto: CreateExternalAssetDto) {

    const externalAsset = this.externalAssetRepository.create(
      createExternalAssetDto,
    );

    return this.externalAssetRepository.save(externalAsset);
  }

  findAll() {
    return `This action returns all externalAsset`;
  }

  findOne(id: number) {
    return `This action returns a #${id} externalAsset`;
  }

  async update(id: number, updateExternalAssetDto: UpdateExternalAssetDto, tempUser: any) {
    try {
      await this.externalAssetRepository.update({id: id}, updateExternalAssetDto);
      let user = {...JSON.parse(tempUser.user), logo: {...updateExternalAssetDto, id: id}};
      const payload = { user };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    catch (err) {
      return 'Failed to upload image.';
    }
  }

  remove(id: number) {
    return `This action removes a #${id} externalAsset`;
  }
}
