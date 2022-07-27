import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

import { Hero } from "./hero";

@Component({
  selector: "do-check",
  template: `
    <div class="info" style="border: 5px solid darkorange">
      <p>{{ hero.name }} can {{ power }}</p>

      <h3>OpenConsole!</h3>
    </div>
  `,
})
export class DoCheckComponent implements DoCheck, OnChanges {
  @Input() hero!: Hero;
  @Input() power = "";

  oldHeroName = "";
  oldPower = "";

  ngOnChanges(changes: SimpleChanges) {
    // solo es para recordad que cuando altero desde al padre un valor primitivo no se dispara este metodo pero si es un Object no se ejecuta
    // console.error("ORANGE: ngOnChanges()");
  }

  ngDoCheck() {
    console.log(`new: ${this.hero.name} !== prev: ${this.oldHeroName}`);
    if (this.hero.name !== this.oldHeroName) {
      this.oldHeroName = this.hero.name;
    }

    console.log(`new: ${this.power} !== prev: ${this.oldPower}`);
    if (this.power !== this.oldPower) {
      this.oldPower = this.power;
    }

    console.warn("ORANGE: ngDoCheck()");
  }

  pruebaMundo() {
    console.error("ORANGE: pruebaMundo()");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
