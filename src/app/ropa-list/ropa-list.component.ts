import { Component } from '@angular/core';
import { Ropa } from './Ropa';
import { CarritoRopaService } from '../carrito-ropa.service';

@Component({
  selector: 'app-ropa-list',
  standalone: false,
  templateUrl: './ropa-list.component.html',
  styleUrl: './ropa-list.component.scss'
})
export class RopaListComponent {

  constructor(private cart : CarritoRopaService){
  }
  
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
      type: "Campera",
      price: 300,
      stock: 10,
      image: "img/supreme.jpeg",
      clearance: true,
      quantity: 0,
    },
    { 
      name: "Nike Cream",
      type: "Pantalon",
      price: 80,
      stock: 0,
      image: "img/pantalon.jpeg",
      clearance: false,
      quantity: 0,
    }
  ];
  
  maxReached(m:string){
    alert(m);
  }

  addToCart(ropa:Ropa):void{

    this.cart.addToCart(ropa)

    ropa.stock -= ropa.quantity;
    ropa.quantity = 0;
  }


}
