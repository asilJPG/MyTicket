import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface HumanCatAttr {
  name: string;
  start_age: number;
  finish_age: number;
  gender: string;
}

@Table({ tableName: 'humanCat' })
export class HumanCat extends Model<HumanCat, HumanCatAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
  })
  name: string;
  @Column({
    type: DataType.INTEGER,
  })
  start_age: number;
  @Column({
    type: DataType.INTEGER,
  })
  finish_age: number;
  @Column({
    type: DataType.STRING,
  })
  gender: string;
}
