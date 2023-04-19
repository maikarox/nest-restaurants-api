export class Restaurant {
  constructor(
    public id: string,
    public name: string,
    public address: string,
    public cuisine: string,
    public price: number,
    public rating: number,
  ) {}
}
