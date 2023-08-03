import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HumanCat } from './models/human-cat.model';
import { CreateHumanCatDto } from './dto/create-human-cat.dto';

@Injectable()
export class HumanCatService {
  constructor(@InjectModel(HumanCat) private humanCatRepo: typeof HumanCat) {}

  async createHumanCat(
    createHumanCatDto: CreateHumanCatDto,
  ): Promise<HumanCat> {
    const humanCat = await this.humanCatRepo.create(createHumanCatDto);
    return humanCat;
  }
  async getAllHumanCat(): Promise<HumanCat[]> {
    const humanCat = await this.humanCatRepo.findAll();
    return humanCat;
  }
  async getOneHumanCat(id: number) {
    const humanCat = await this.humanCatRepo.findOne({ where: { id } });
    return humanCat;
  }
  async deleteHumanCat(id: number) {
    const humanCat = await this.humanCatRepo.destroy({ where: { id } });
    console.log(humanCat);
    return humanCat;
  }
}
