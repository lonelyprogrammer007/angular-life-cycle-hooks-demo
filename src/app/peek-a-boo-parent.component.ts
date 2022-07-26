import {
  AfterContentChecked,
  AfterViewChecked,
  Component,
  DoCheck,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

import { LoggerService } from "./logger.service";

@Component({
  selector: "peek-a-boo-parent",
  template: `
    <hr />
    <div class="parent" style="border: 2px solid red;">
      <h2>Peek-A-Boo</h2>

      <button type="button" (click)="toggleChild()">
        {{ hasChild ? "Destroy" : "Create" }} PeekABooComponent
      </button>
      <button type="button" (click)="updateHero()" [hidden]="!hasChild">
        Update Hero
      </button>

      <div class="info">
        <peek-a-boo *ngIf="hasChild" [name]="heroName"></peek-a-boo>

        <h3>Open the console and see the changes!!</h3>
        <!-- <div *ngFor="let msg of hookLog" class="log">{{ msg }}</div> -->
      </div>
    </div>
  `,
  providers: [LoggerService],
})
export class PeekABooParentComponent
  implements DoCheck, AfterViewChecked, AfterContentChecked
{
  hasChild: boolean;
  hookLog: string[];
  heroName: string;

  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.heroName = "";
    this.hookLog = [];
    this.hasChild = false;
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = "Windstorm";
      this.logger.clear(); // clear log on create
    }
    this.hookLog = this.logger.logs;
    // debugger;
    // Esto fuerza un renderizado
    // this.logger.tick(); Esto es solo para entenderlo visualmente en el navagador
    //console.warn("Evento de cambio!");
  }

  updateHero() {
    this.heroName += "!";
    // this.logger.tick(); Esto es solo para entenderlo visualmente en el navagador
  }

  ngDoCheck() {
    //console.warn("ngDoCheck() - PADRE");
  }

  ngAfterContentChecked() {
    //console.warn("ngAfterContentChecked() - PADRE");
  }

  ngAfterViewChecked() {
    //console.warn("ngAfterViewChecked() - PADRE");
  }
}
