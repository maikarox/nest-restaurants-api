import { PartialType } from '@nestjs/mapped-types';
import { CreateRestaurantDto } from './create-restaurant.dto';

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {
  constructor(
    public id: string,
    public name: string,
    public address: string,
    public cuisine: string,
    public price: number,
    public rating: number,
  ) {
    super(id, name, address, cuisine, price, rating);
  }
}
