export interface IFood {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
}

export const data: IFood[] = [
  {
    id: 1,
    name: 'Frango Churrasco',
    category: 'churrasco',
    image: 'frango_churrasco',
    price: 10.75
  },
  {
    id: 2,
    name: 'Hamburguer Pitas Duplo',
    category: 'haburguer',
    image: 'hamburguer_pitas_duplo',
    price: 11.90
  },
  {
    id: 3,
    name: 'Picanha Argentina',
    category: 'churrasco',
    image: 'picanha_argentina',
    price: 17.50
  },
  {
    id: 4,
    name: '½ Frango Churrasco',
    category: 'churrasco',
    image: 'meio _frango_churrasco',
    price: 5.25
  },
  {
    id: 5,
    name: 'Batata Frita I',
    category: 'fry',
    image: 'batata_frita',
    price: 5.25
  },
  {
    id: 6,
    name: 'Febras Do Lombo',
    category: 'churrasco',
    image: 'febras_lombo',
    price: 11.50
  },
];