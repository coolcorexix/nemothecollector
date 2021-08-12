import { TypeItemStockStatus } from './TypeItemStockStatus.model';

export interface IEatItem {
  imageUri: string;
  name: string;
  ingredient: string;
  stockStatus: TypeItemStockStatus;
  productionDate?: string;
  bestBefore?: string;
  price?: string;
}
