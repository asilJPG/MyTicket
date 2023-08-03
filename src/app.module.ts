import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { HumanCatModule } from './human-cat/human-cat.module';
import { VenueModule } from './venue/venue.module';
import { VenuePhotoModule } from './venue-photo/venue-photo.module';
import { SeatModule } from './seat/seat.module';
import { EventModule } from './event/event.module';
import { TicketModule } from './ticket/ticket.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { CustomerCardModule } from './customer_card/customer_card.module';
import { AdminModule } from './admin/admin.module';
import { CartModule } from './cart/cart.module';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [],
      autoLoadModels: true,
    }),
    HumanCatModule,
    VenueModule,
    VenuePhotoModule,
    SeatModule,
    EventModule,
    TicketModule,
    CustomerModule,
    CustomerAddressModule,
    CustomerCardModule,
    AdminModule,
    CartModule,
    BookingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
