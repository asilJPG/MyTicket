import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { HumanCatService } from './human-cat.service';
import { CreateHumanCatDto } from './dto/create-human-cat.dto';
import { HumanCat } from './models/human-cat.model';

@Controller('human-cat')
export class HumanCatController {
  constructor(private readonly humanCatService: HumanCatService) {}
  @Post('create')
  async createHumanCat(@Body() createHumanCatDto: CreateHumanCatDto) {
    return this.humanCatService.createHumanCat(createHumanCatDto);
  }
  @Get('all')
  async getAllHumanCat(): Promise<HumanCat[]> {
    return this.humanCatService.getAllHumanCat();
  }
  @Get(':id')
  async getOneHumanCat(@Param('id') id: string) {
    return this.humanCatService.getOneHumanCat(+id);
  }
  @Delete(':id')
  async deleteHumanCat(@Param('id') id: string) {
    return this.humanCatService.deleteHumanCat(+id);
  }
}
