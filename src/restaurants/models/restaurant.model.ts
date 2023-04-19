import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Restaurant {
  @PrimaryColumn()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public address: string;

  @Column()
  public cuisine: string;

  @Column()
  public price: number;

  @Column()
  public rating: number;
}
