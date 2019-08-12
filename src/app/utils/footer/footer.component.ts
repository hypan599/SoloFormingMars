import { Component, OnInit } from '@angular/core';
import {GameService} from '../../service/game.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private player: GameService
  ) { }

  ngOnInit() {
  }

}
