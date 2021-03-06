import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { HeroService } from "./hero/hero.service";
import { ToastService } from "./toast.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {


  public heroes : Hero[] = [
    new Hero("Beta man", ["Betaaaah"]),
    new Hero("Noedel man", ["Noedeledokie"])
  ];

  constructor(private heroService: HeroService, private toastService: ToastService){
    var heroes = heroService.getHeroes();
  }

  public toast(message){
    this.toastService.ShowToast(message);
  }

  public lines: string[] = [];

  public selectedHero : Hero;

  public addLine(line){
    this.lines.push(line);
  }



}
