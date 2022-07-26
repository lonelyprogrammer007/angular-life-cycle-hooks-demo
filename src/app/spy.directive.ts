import { Directive, OnInit, OnDestroy, Input } from "@angular/core";

import { LoggerService } from "./logger.service";

let nextId = 1;

// Spy on any element to which it is applied.
// Usage: <div appSpy>...</div>
@Directive({ selector: "[appSpy]" })
export class SpyDirective implements OnInit, OnDestroy {
  @Input() heroObject!: string;
  private id = nextId++;

  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.logger.log(`Spy #${this.id} onInit`);
    console.info(`ngOnInit() - Spy directive - ${this.heroObject}`);
  }

  ngOnDestroy() {
    this.logger.log(`Spy #${this.id} onDestroy`);
    console.info("ngOnDestroy() - Spy directive");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
