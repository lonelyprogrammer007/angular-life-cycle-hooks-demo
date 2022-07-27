import { AfterViewChecked, Component, DoCheck } from "@angular/core";

import { LoggerService } from "./logger.service";

@Component({
  selector: "after-view-parent",
  template: `
    <div style="border: 5px solid lightgreen">
      <h2>AfterView</h2>

      <after-view *ngIf="show"></after-view>

      <div class="info">
        <h3>Open console!!</h3>
        <button type="button" (click)="reset()">Reset</button>
        <!-- <div *ngFor="let msg of logger.logs" class="log">{{ msg }}</div> -->
      </div>
    </div>
  `,
  providers: [LoggerService],
})
export class AfterViewParentComponent implements AfterViewChecked, DoCheck {
  show = true;

  constructor(public logger: LoggerService) {}

  reset() {
    // this.logger.clear();
    // quickly remove and reload AfterViewComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => (this.show = true));
  }
  ngAfterViewChecked() {
    console.warn("VERDE: ngAfterViewChecked()");
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.error("VERDE: ngDoCheck()");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
