import {Component} from 'angular2/core';

@Component({
  selector: 'my-hero-detail',
  template:`
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <div><input [(ngModel)]="selectedHero.name" placeholder="name"></div>
      </div>
    </div>`
})

export class HeroDetailComponent({
  function(){console.log("HeroDetailComponent")}
})