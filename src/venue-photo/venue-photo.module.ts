import { Module } from '@nestjs/common';
import { VenuePhotoService } from './venue-photo.service';
import { VenuePhotoController } from './venue-photo.controller';

@Module({
  controllers: [VenuePhotoController],
  providers: [VenuePhotoService]
})
export class VenuePhotoModule {}
