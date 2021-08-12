import { IEatItem } from './models/IEatItem.model';

export const itemsData: IEatItem[] = [
  {
    imageUri: 'https://i.imgur.com/oFgaLSO.jpeg',
    name: 'Brownie hạnh nhân',
    ingredient: 'sôcôla (độ đắng 72%), ít đường, bơ, hạnh nhân',
    productionDate: 'thứ Ba, 07/04/2021',
    bestBefore: 'thứ Hai, 12/04/2021',
    // *todo add real size here
    price: '35,000đ / 1 mẩu 5cm x 5cm',
    stockStatus: 'IN STOCK',
  },
  {
    imageUri: 'https://i.imgur.com/PIN0MsB.jpg',
    name: 'Cookies mềm',
    ingredient: 'sôcôla (độ đắng 72%), nhiều đường',
    productionDate: 'thứ Ba, 07/04/2021',
    bestBefore: 'thứ Hai, 12/04/2021',
    price: '25,000đ / 1 bánh đường kính 5cm',
    stockStatus: 'SOLD OUT',
  },
];
