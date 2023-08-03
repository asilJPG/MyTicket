import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface BookingAttr {
  card_id: number;
  createdAt: Date;
  finished: Date;
  status_id: boolean;
}

@Table({ tableName: 'booking' })
export class Booking extends Model<Booking, BookingAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
  })
  card_id: number;
  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;
  @Column({
    type: DataType.DATE,
  })
  finished: Date;

  @Column({
    type: DataType.BOOLEAN,
  })
  is_status: boolean;
}
