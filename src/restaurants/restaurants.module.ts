import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { Restaurant } from './models/restaurant.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideRestaurantsRepository } from './repositories';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant])],
  controllers: [RestaurantsController],
  providers: [RestaurantsService, ...provideRestaurantsRepository()],
})
export class RestaurantsModule {}
