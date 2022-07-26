import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

import { Hero } from "./hero";

@Component({
  selector: "on-changes",
  template: `
    <div class="info" style="border: 5px solid lightcoral">
      <p>{{ hero.name }} can {{ power }}</p>

      <h3>Open console!</h3>
      <!-- <div *ngFor="let chg of changeLog" class="log">{{ chg }}</div> -->
    </div>
  `,
})
export class OnChangesComponent implements OnChanges, DoCheck {
  @Input() hero!: Hero;
  @Input() power = "";

  // changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      // this.changeLog.push(
      //   `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      // );
      console.error(
        `${propName}: currentValue = ${cur}, previousValue = ${prev} ---- ${this.hero.name}`
      );
    }
  }

  reset() {
    // this.changeLog = [];
  }

  ngDoCheck() {
    console.error("Docheck");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
