import { Injectable, Provider } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from '../../data/constants';
import { Repository } from 'typeorm';
import { Restaurant } from '../models/restaurant.model';
import { RESTAURANTS_REPOSITORY_TOKEN } from './restaurants.repository.interface';
import { RestaurantsTypeOrmRepository } from './implementations';
import { RestaurantsInMemoryRepository } from './implementations/restaurants.inmemory.repository';

export function provideRestaurantsRepository(): Provider[] {
  return [
    {
      provide: RESTAURANTS_REPOSITORY_TOKEN,
      useFactory: async (
        dependenciesProvider: RestaurantsRepoDependenciesProvider,
      ) => provideRestaurantsRepositoryFactory(dependenciesProvider),
      inject: [RestaurantsRepoDependenciesProvider],
    },
    RestaurantsRepoDependenciesProvider,
  ];
}

async function provideRestaurantsRepositoryFactory(
  dependenciesProvider: RestaurantsRepoDependenciesProvider,
) {
  await ConfigModule.envVariablesLoaded;

  switch (process.env.RESTAURANTS_DATASOURCE) {
    case DataSource.TYPEORM:
      return new RestaurantsTypeOrmRepository(
        dependenciesProvider.typeOrmRepository,
      );
    case DataSource.MEMORY:
    default:
      return new RestaurantsInMemoryRepository();
  }
}

@Injectable()
export class RestaurantsRepoDependenciesProvider {
  constructor(
    @InjectRepository(Restaurant)
    public typeOrmRepository: Repository<Restaurant>,
  ) {}
}
