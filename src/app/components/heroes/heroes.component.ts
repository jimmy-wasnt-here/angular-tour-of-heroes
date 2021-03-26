import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';
import { Hero } from '../../model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 /*  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }; */
  public heroes: Hero[] = [];
  
  constructor(private heroService: HeroService, private messageService: MessageService) {}
  
/*   public selectedHero?: Hero;
  public onSelect(hero: Hero): void {
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    this.selectedHero = hero;
  }  */

  /* getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  } */

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  
  ngOnInit() {
    this.getHeroes();
  } 

}