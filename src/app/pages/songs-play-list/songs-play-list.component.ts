import { Component, OnInit, ɵPlayState } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-songs-play-list',
  templateUrl: './songs-play-list.component.html',
  styleUrls: ['./songs-play-list.component.css']
})
export class SongsPlayListComponent implements OnInit {
  name = this.route.snapshot.paramMap.get('name');
  constructor(private route: ActivatedRoute, private song: SongsService) {
   
   }
  
  
  hamaky_songs = this.song.hamaky;
  elissa_songs = this.song.elissa;
  ashor_songs = this.song.ashor;

  ngOnInit() {
    
  }

/**
 * document.getElementById('audio').setAttribute('autoplay','');
   document.getElementById('audio').setAttribute('src',this.hamaky_songs[songs].song1)
 * 
 */

  play(index) {
    if(this.name == 'Mohamed Hamaky'){
        document.getElementById('audio').setAttribute('autoplay','');
        document.getElementById('audio').setAttribute('src',this.hamaky_songs[index].song1)
      
    }else if(this.name == 'Elissa') {
     // paly music
        document.getElementById('audio').setAttribute('autoplay','');
        document.getElementById('audio').setAttribute('src',this.elissa_songs[index].song1)
    } else if(this.name == 'Tamer Ashor'){
     // paly music
        document.getElementById('audio').setAttribute('autoplay','');
        document.getElementById('audio').setAttribute('src',this.ashor_songs[index].song1)
    }
  }

}
