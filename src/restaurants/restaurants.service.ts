import { Inject, Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import {
  RestaurantRepository,
  RESTAURANTS_REPOSITORY_TOKEN,
} from './repositories/restaurants.repository.interface';

@Injectable()
export class RestaurantsService {
  constructor(
    @Inject(RESTAURANTS_REPOSITORY_TOKEN)
    private restaurantsRepository: RestaurantRepository,
  ) {}

  create(createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantsRepository.create(createRestaurantDto);
  }

  findAll() {
    return this.restaurantsRepository.findAll();
  }

  findOne(id: string) {
    return this.restaurantsRepository.findOne(id);
  }

  update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    return this.restaurantsRepository.update(id, updateRestaurantDto);
  }

  remove(id: string) {
    return this.restaurantsRepository.remove(id);
  }
}
