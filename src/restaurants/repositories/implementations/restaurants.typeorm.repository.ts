import { Restaurant } from '../../models/restaurant.model';
import { RestaurantRepository } from '../restaurants.repository.interface';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

export class RestaurantsTypeOrmRepository implements RestaurantRepository {
  constructor(private restaurantsRepository: Repository<Restaurant>) {}

  async create(restaurant: Restaurant) {
    await this.restaurantsRepository.insert(restaurant);
    return restaurant;
  }

  async findAll() {
    return this.restaurantsRepository.find();
  }

  async findOne(id: string) {
    return this.restaurantsRepository.findOne({ where: { id } });
  }

  async update(id: string, restaurant: Restaurant) {
    return this.restaurantsRepository.update(id, restaurant);
  }

  async remove(id: string) {
    const restaurant = await this.restaurantsRepository.findOne({
      where: { id },
    });

    if (restaurant) {
      return this.restaurantsRepository.remove(restaurant);
    }

    throw new NotFoundException(`Couldn't find restaurant with id ${id}`);
  }
}
