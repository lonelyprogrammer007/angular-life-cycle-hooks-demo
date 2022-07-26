import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from "@angular/core";

import { LoggerService } from "./logger.service";
import { PeekABooDirective } from "./peek-a-boo.directive";

@Component({
  selector: "peek-a-boo",
  template: `<p style="border: 2px solid green;">
    Now you see my hero, {{ name }}
  </p>`,
})
// Don't HAVE to mention the Lifecycle Hook interfaces
// unless we want typing and tool support.
export class PeekABooComponent
  extends PeekABooDirective
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() name: string;
  private verb: string;

  constructor(logger: LoggerService) {
    super(logger);
    this.name = "";
    this.verb = "initialized";

    const is = this.name ? "is" : "is not";
    this.logIt(`name ${is} known at construction`);
    //console.warn("construtor() - HIJO");
  }

  // only called for/if there is an @input variable set by parent.
  ngOnChanges(changes: SimpleChanges) {
    const changesMsgs: string[] = [];
    for (const propName in changes) {
      if (propName === "name") {
        const name = changes["name"].currentValue;
        changesMsgs.push(`name ${this.verb} to "${name}"`);
      } else {
        changesMsgs.push(propName + " " + this.verb);
      }
    }
    this.logIt(`OnChanges: ${changesMsgs.join("; ")}`);
    this.verb = "changed"; // next time it will be a change
    //console.warn("ngOnChanges() - HIJO");
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() {
    this.logIt("DoCheck");
    //console.warn("ngDoCheck() - HIJO");
  }

  ngAfterContentInit() {
    this.logIt("AfterContentInit");
    //console.warn("ngAfterContentInit() - HIJO");
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() {
    this.logIt("AfterContentChecked");
    //console.warn("ngAfterContentChecked() - HIJO");
  }

  ngAfterViewInit() {
    this.logIt("AfterViewInit");
    //console.warn("ngAfterViewInit() - HIJO");
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() {
    this.logIt("AfterViewChecked");
    //console.warn("ngAfterViewChecked() - HIJO");
  }

  ngOnDestroy() {
    this.logIt("OnDestroy");
    //console.warn("ngOnDestroy() - HIJO");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
