import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbConfig } from './config';
import { Restaurant } from './restaurants/entities/restaurant.entity';
import { RestaurantsModule } from './restaurants/restaurants.module';

const { type, host, port, user: username, password, name: database } = dbConfig;

@Module({
  imports: [
    RestaurantsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type,
      host,
      port,
      username,
      password,
      database,
      entities: [Restaurant],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
