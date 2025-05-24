import { Component } from '@angular/core';
import { Ropa } from './Ropa';

@Component({
  selector: 'app-ropa-list',
  standalone: false,
  templateUrl: './ropa-list.component.html',
  styleUrl: './ropa-list.component.scss'
})
export class RopaListComponent {
  
  ropas : Ropa[] = [
    { 
      name: "Cracky puff skeleton",
      type: "Campera",
      price: 150,
      stock: 2,
      image: "img/campera2.jpeg",
      clearance: false,
      quantity: 0,
    },
    { 
      name: "Supreme spring",
      type: "CamperaJE",
      price: 300,
      stock: 10,
      image: "img/supreme.jpeg",
      clearance: true,
      quantity: 0,
    },
    { 
      name: "Nike Cream",
      type: "Buzo",
      price: 80,
      stock: 0,
      image: "img/campera.jpeg",
      clearance: false,
      quantity: 0,
    }
  ];
  

  downQuantity(ropa: Ropa):void{
    if (ropa.quantity > 0)
      ropa.quantity--;
  }

  upQuantity(ropa: Ropa):void{
    if (ropa.quantity < ropa.stock)
      ropa.quantity++;
  }
  
  changeQuantity(event: Event, ropa: Ropa): void {
    const input = event.target as HTMLInputElement;
    let value = parseInt(input.value, 10);   // Convierte el string en número base 10

    if (isNaN(value)) {       // si no es un numero, se fuerza a 0.
      ropa.quantity = 0;
    } else if (value < 0) {   // si el valor es negativo, se fuerza a 0
      ropa.quantity = 0;
      input.value = '0'; 
    } else if (value > ropa.stock) {  //si el usuario pone un numero mayor al stock, el valor se ajusta automáticamente al stock.
      ropa.quantity = ropa.stock;
      input.value = ropa.stock.toString();  
    } else {
      ropa.quantity = value;
      input.value = value.toString(); // esto elimina automaticamente los ceros innecesarios
    }
  }

}
