import { AfterViewChecked, Component, DoCheck } from "@angular/core";

@Component({
  selector: "app-child-view",
  template: `
    <div style="border: 5px solid lightseagreen">
      <label for="hero-name">Hero name: </label>
      <input type="text" id="hero-name" [(ngModel)]="hero" />
    </div>
  `,
})
export class ChildViewComponent implements AfterViewChecked, DoCheck {
  hero = "Magneta";

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.error("AZUL: ngDoCheck()");
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.warn("AZUL: ngAfterViewChecked()");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
