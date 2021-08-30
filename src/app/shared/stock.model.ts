export class Stock {
  constructor(
    public ticker: string,
    public name: string,
    public active: boolean,
    public market: string,
    public currency_name: string
    ) {}
}