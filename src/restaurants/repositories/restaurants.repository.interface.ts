import { Restaurant } from '../entities/restaurant.entity';

export interface RestaurantRepository {
  create(restaurant: Restaurant): Promise<Restaurant>;
  findAll(): Promise<Restaurant[]>;
  findOne(id: string);
  update(id: string, restaurant: Restaurant);
  remove(id: string);
}

// Token used to inject the interface
export const RESTAURANTS_REPOSITORY_TOKEN = 'restaurants-repository-token';
