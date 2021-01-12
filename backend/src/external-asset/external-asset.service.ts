import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ExternalAsset } from './entities/external-asset.entity';

import { CreateExternalAssetDto } from './dto/create-external-asset.dto';
import { UpdateExternalAssetDto } from './dto/update-external-asset.dto';

@Injectable()
export class ExternalAssetService {
  constructor(
    @InjectRepository(ExternalAsset)
    private readonly externalAssetRepository: Repository<ExternalAsset>,
  ) {}

  create(createExternalAssetDto: CreateExternalAssetDto) {
    console.log(createExternalAssetDto);

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

  update(id: number, updateExternalAssetDto: UpdateExternalAssetDto) {
    return `This action updates a #${id} externalAsset`;
  }

  remove(id: number) {
    return `This action removes a #${id} externalAsset`;
  }
}
