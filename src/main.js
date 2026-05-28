import './style.css'
import { card } from './card'

let data = [
  {
    id: 1,
    path: 'img/1.png',
    title: 'Стул',
    price: 5800
  },
  {
    id: 2,
    path: 'img/4.png',
    title: 'Табуретка',
    price: 6200
  },
  {
    id: 3,
    path: 'img/9.png',
    title: 'Дачный стул',
    price: 3500
  },
  {
    id: 4,
    path: 'img/10.png',
    title: 'Кресло',
    price: 9200
  },
  {
    id: 5,
    path: 'img/8.png',
    title: 'Винтаж',
    price: 1000
  },
  
]

const container = document.querySelector(".container");


data.forEach((item)=>{

  container.append(card(item));
})


