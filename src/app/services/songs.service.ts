import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  ashor = [
    {
      id: 1,
      img: 'assets/ashor.jpg',
      name: 'ayam',
      song1: 'assets/ashor/Ayam.mp3'
    },
    {
      id: 2,
      img: 'assets/ashor.jpg',
      name: "Ba'aly Zaman",
      song1: "assets/ashor/Ba'aly Zaman.mp3"
    },
    {
      id: 3,
      img: 'assets/ashor.jpg',
      name: 'Oloolo Samah',
      song1: 'assets/ashor/Oloolo Samah.mp3'
    }
  ];

  elissa = [
    {
      id: 1,
      img: 'assets/elissa.jpg',
      name: 'Hikayat',
      song1: 'assets/elissa/Hikayat.mp3'
    },
    {
      id: 2,
      img: 'assets/elissa.jpg',
      name: 'krahni',
      song1: 'assets/elissa/Krahni.mp3'
    }
  ];

  hamaky = [
    {
      id: 1,
      img: 'assets/hamaky.jpg',
      name: 'Oddam El Nas',
      song1: 'assets/hamaky/Oddam El Nas.mp3'
    },
    {
      id: 2,
      img: 'assets/hamaky.jpg',
      name: 'Radeeny',
      song1: 'assets/hamaky/Radeeny.mp3'
    }
  ];
  constructor() { }
}
