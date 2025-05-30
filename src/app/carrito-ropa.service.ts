import { Injectable } from '@angular/core';
import { Ropa } from './ropa-list/Ropa';
import { BehaviorSubject } from 'rxjs';

/**
 * maneja la logica del carrito
 * 
 */

@Injectable({
  providedIn: 'root'
})
export class CarritoRopaService {

  private _cartList: Ropa[] = [];

  cartList: BehaviorSubject<Ropa[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(ropa: Ropa) {
    let item = this._cartList.find((v1) => v1.name === ropa.name);

    if (!item) {
      this._cartList.push({...ropa});
    }else {
      item.quantity += ropa.quantity;
    }

    this.cartList.next(this._cartList);
  }


}
