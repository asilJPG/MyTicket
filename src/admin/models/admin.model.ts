import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface AdminAttr {
  name: string;
  login: string;
  hashed_password: string;
  hashed_refreh_token: string;
  is_acctive: boolean;
  is_creator: boolean;
}

@Table({ tableName: 'Admin' })
export class Admin extends Model<Admin, AdminAttr> {
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
    type: DataType.STRING,
  })
  login: string;
  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;
  @Column({
    type: DataType.BOOLEAN,
  })
  is_active: boolean;
  @Column({
    type: DataType.BOOLEAN,
  })
  is_creator: boolean;
}
