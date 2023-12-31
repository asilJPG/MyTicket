import { Test, TestingModule } from '@nestjs/testing';
import { VenuePhotoController } from './venue-photo.controller';
import { VenuePhotoService } from './venue-photo.service';

describe('VenuePhotoController', () => {
  let controller: VenuePhotoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VenuePhotoController],
      providers: [VenuePhotoService],
    }).compile();

    controller = module.get<VenuePhotoController>(VenuePhotoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
