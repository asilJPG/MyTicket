import { Module } from '@nestjs/common';
import { HumanCatService } from './human-cat.service';
import { HumanCatController } from './human-cat.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { HumanCat } from './models/human-cat.model';

@Module({
  imports: [SequelizeModule.forFeature([HumanCat])],
  controllers: [HumanCatController],
  providers: [HumanCatService],
})
export class HumanCatModule {}
