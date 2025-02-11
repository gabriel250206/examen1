import { Component } from '@angular/core';
import { ExamenService } from '../../examen.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  quote: any;
  constructor(private examenservice:ExamenService) {}
  ngOnInit() {
    this.examenservice.getQuote().subscribe((data) => {
      this.quote = data;
      console.log(this.quote);
      console.log("aqui")
    });
  }
}
