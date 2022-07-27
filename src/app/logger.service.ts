import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {
  logs: string[] = [];
  prevMsg = "";
  prevMsgCount = 1;

  log(msg: string) {
    if (msg === this.prevMsg) {
      // Repeat message; update last log entry with count.
      this.prevMsgCount++;
      this.logs[this.logs.length - 1] = msg + ` (${this.prevMsgCount}x)`;
    } else {
      // New message; log it.
      this.prevMsg = msg;
      this.prevMsgCount = 1;
      this.logs.push(msg);
    }
  }

  clear() {
    this.logs = [];
  }

  /*
    Porque las siguientes lineas de codigo hacen que se re renderice la app?:
    https://lukeliutingchun.medium.com/angular-performance-issue-caused-by-settimeout-and-setinterval-1a4a65c07be3
    schedules a view refresh to ensure display catches up
  */
  tick() {
    this.tick_then(() => {});
  }
  tick_then(fn: () => any) {
    setTimeout(fn, 1000);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
