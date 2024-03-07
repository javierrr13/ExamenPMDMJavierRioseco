import { Component } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent {
  numero: number = 0;
  running: boolean = false;
  iv: any;
  records:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  async start() {
    this.running = true;
    while (this.running) {
      await new Promise<void>(resolve => {
        this.iv = setInterval(() => {
          this.numero++;
        }, 1000);
      });
    }
  }

  pause() {
    this.running = false;
    clearInterval(this.iv);
  }

  record() {
    this.records=this.numero;
  }
}


