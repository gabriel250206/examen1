import { Component, OnInit } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  imports: [IonicModule,NgFor,CommonModule],
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent  {

  items: { id: number; name: string; year: string, productor:string,casa:string,prota:string }[] = [];
  nextId: number = 1; // ID único para cada elemento

 // Agregar un elemento con nombre, fecha y estado inicial (no completado)
 addItem(name: string,  year:string, productor:string,casa:string,prota:string): void {
  if (name.trim() && year.trim() && productor.trim()&& casa.trim() && prota.trim()) {
    this.items.push({
      id: this.nextId++,
      name: name.trim(),
      year: year.trim(),
      productor:productor.trim(),
      casa:casa.trim(),
      prota:prota.trim(),
      
    });
  } else {
    console.error('El nombre y la fecha no pueden estar vacíos');
  }
}

  
  // Cambiar el estado de "completado"
  

  // Eliminar un elemento de la lista
  removeItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  constructor(public navCtrl: NavController) {

  }
}
