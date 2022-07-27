import { Component } from "@angular/core";

@Component({
  selector: "app-child",
  template: ` <div style="border: 5px solid darkviolet">
    <label for="hero-name">Hero name: </label>
    <input type="text" id="hero-name" [(ngModel)]="hero" />
  </div>`,
})
export class ChildComponent {
  hero = "Magneta";

  pruebaMundo() {
    console.error("prueba mundo!");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
