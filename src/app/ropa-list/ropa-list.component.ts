import { Component } from '@angular/core';
import { Ropa } from './Ropa';
import { CarritoRopaService } from '../carrito-ropa.service';
import { DatosRopaService } from '../datos-ropa.service';

@Component({
  selector: 'app-ropa-list',
  standalone: false,
  templateUrl: './ropa-list.component.html',
  styleUrl: './ropa-list.component.scss'
})

export class RopaListComponent {

  ropas : Ropa[] = [];

  constructor(
    private cart : CarritoRopaService,
    private clothesDataService: DatosRopaService){
  }
  
  ngOnInit(): void{
    this.clothesDataService.getAll()
    .subscribe(ropas => this.ropas = ropas);
  }
  
   maxReached(m:string){
    alert(m);
  }

  addToCart(ropa:Ropa):void{
    this.cart.addToCart(ropa)
    ropa.stock -= ropa.quantity;
    ropa.quantity = 0;
  }
}
