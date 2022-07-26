import { Component, ViewChild } from "@angular/core";

import { Hero } from "./hero";
import { OnChangesComponent } from "./on-changes.component";

@Component({
  selector: "on-changes-parent",
  templateUrl: "./on-changes-parent.component.html",
  styles: [""],
})
export class OnChangesParentComponent {
  hero!: Hero;
  power = "";
  title = "OnChanges";
  @ViewChild(OnChangesComponent) childView!: OnChangesComponent;

  constructor() {
    this.reset();
  }

  reset() {
    // new Hero object every time; triggers onChanges
    this.hero = new Hero("Windstorm");
    // setting power only triggers onChanges if this value is different
    this.power = "sing";
    console.error(this.childView);
    if (this.childView) {
      this.childView.reset();
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
