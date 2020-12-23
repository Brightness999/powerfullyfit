import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';

import { Organization } from './entities/organization.entity';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>,
  ) {}

  create(createOrganizationDto: CreateOrganizationDto) {
    const organization = this.organizationRepository.create(
      createOrganizationDto,
    );

    return this.organizationRepository.save(createOrganizationDto);
  }

  findAll() {
    return this.organizationRepository.find();
  }

  async findOne(id: number) {
    const organization = await this.organizationRepository.findOne(id);

    if (!organization)
      throw new NotFoundException(`Organization with id: ${id} was not Found`);

    return organization;
  }

  async update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    const organization: Organization = await this.organizationRepository.preload(
      {
        id: id,
        ...updateOrganizationDto,
      },
    );

    if (!organization) throw new NotFoundException();

    return this.organizationRepository.save(organization);
  }

  async remove(id: number) {
    const organization: Organization = await this.findOne(id);

    return this.organizationRepository.remove(organization);
  }
}
