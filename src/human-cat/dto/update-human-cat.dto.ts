import { PartialType } from '@nestjs/mapped-types';
import { CreateHumanCatDto } from './create-human-cat.dto';

export class UpdateHumanCatDto extends PartialType(CreateHumanCatDto) {}
