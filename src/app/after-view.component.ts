import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ViewChild,
} from "@angular/core";

import { ChildViewComponent } from "./child-view.component";
import { LoggerService } from "./logger.service";

@Component({
  selector: "after-view",
  template: `
    <div style="border: 5px solid salmon">
      <div>child view begins</div>
      <app-child-view></app-child-view>
      <div>child view ends</div>

      <p *ngIf="comment" class="comment">
        {{ comment }}
      </p>
    </div>
  `,
})
export class AfterViewComponent
  implements AfterViewChecked, AfterViewInit, DoCheck
{
  comment = "";
  private prevHero = "";

  // Query for a VIEW child of type `ChildViewComponent`
  @ViewChild(ChildViewComponent) viewChild!: ChildViewComponent;

  constructor(private logger: LoggerService) {
    // this.logIt("AfterView constructor");
  }

  ngDoCheck(): void {
    console.error("SALMON: ngDoCheck()");
  }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    // this.logIt("AfterViewInit");

    this.doSomething();
    // console.warn("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    if (this.prevHero === this.viewChild.hero) {
      // this.logIt("AfterViewChecked (no change)");
    } else {
      this.prevHero = this.viewChild.hero;
      // this.logIt("AfterViewChecked");
      this.doSomething();
    }
    console.warn("SALMON: ngAfterViewChecked()");
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    const c = this.viewChild.hero.length > 10 ? "That's a long name" : "";
    if (c !== this.comment) {
      // Wait a tick because the component's view has already been checked
      this.logger.tick_then(() => (this.comment = c));
    }
  }

  private logIt(method: string) {
    const child = this.viewChild;
    const message = `${method}: ${child ? child.hero : "no"} child view`;
    this.logger.log(message);
  }
  // ...
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
