import { Injectable } from '@angular/core';
import {init} from 'protractor/built/launcher';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  generation: number;
  terraformingRate: number;
  megaCredits: number;
  megaProduction: number;
  steel: number;
  steelProduction: number;
  titanium: number;
  titaniumProduction: number;
  plants: number;
  plantsProduction: number;
  energy: number;
  energyProduction: number;
  heat: number;
  heatProduction: number;

  constructor() {
    this.initGame();
  }

  initGame(expansions?) {
    const initProduction = 1;
    const initResource = 0;
    this.generation = 1;
    this.terraformingRate = 20;
    this.megaCredits = initResource;
    this.steel = initResource;
    this.titanium = initResource;
    this.plants = initResource;
    this.energy = initResource;
    this.heat = initResource;
    this.megaProduction = initProduction;
    this.steelProduction = initProduction;
    this.titaniumProduction = initProduction;
    this.plantsProduction = initProduction;
    this.energyProduction = initProduction;
    this.heatProduction = initProduction;
  }

  produce() {
    this.terraformingRate += 10;
  }

}
