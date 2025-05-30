import { Component } from '@angular/core';
import { CarritoRopaService } from '../carrito-ropa.service';
import { Ropa } from '../ropa-list/Ropa';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {

  cartList$: Observable<Ropa[]> 

  constructor(private cart : CarritoRopaService){
    this.cartList$ = cart.cartList.asObservable();
  }

}
