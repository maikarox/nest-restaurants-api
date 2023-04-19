import { Restaurant } from '../../entities/restaurant.entity';
import { RestaurantRepository } from '../restaurants.repository.interface';

export class RestaurantsInMemoryRepository implements RestaurantRepository {
  private restaurants: Restaurant[] = [];

  async create(restaurant: Restaurant) {
    this.restaurants.push(restaurant);
    return restaurant;
  }

  async findAll() {
    return this.restaurants;
  }

  async findOne(id: string) {
    return this.restaurants.find(({ id: restaurantId }) => restaurantId === id);
  }

  async update(id: string, restaurant: Restaurant) {
    const index = this.restaurants.findIndex(
      ({ id: restaurantId }) => restaurantId === id,
    );
    this.restaurants[index] = restaurant;
  }

  async remove(id: string) {
    const index = this.restaurants.findIndex(
      ({ id: restaurantId }) => restaurantId === id,
    );
    this.restaurants.splice(index, 1);
  }
}
