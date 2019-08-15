import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingersService {
  singers = [
    {
      name: 'Mohamed Hamaky',
      nationality: 'Egypt',
      img: 'assets/hamaky.jpg',
      id: 1
    },
    {
      name: 'Elissa',
      nationality: 'Libnan',
      img: 'assets/elissa.jpg',
      id: 2
    },
    {
      name: 'Tamer Ashor',
      nationality: 'Egypt',
      img: 'assets/ashor.jpg',
      id: 3
    },
  ]
  constructor() { }
}
