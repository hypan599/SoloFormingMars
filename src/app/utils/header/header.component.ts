import { Component, OnInit } from '@angular/core';
import {GameService} from '../../service/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private player: GameService
  ) { }

  ngOnInit() {
  }

  go() {
    this.player.produce();
  }

  newGame() {
    this.player.initGame();
  }

}
