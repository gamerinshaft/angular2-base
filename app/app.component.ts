import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>'
})

export class AppComponent {
  public title = 'Tour of Heros';
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

}


interface Hero {
  id: number;
  name: string;
}
