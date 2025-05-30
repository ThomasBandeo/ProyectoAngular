import { Component, Input, Output , EventEmitter} from '@angular/core';
import { Ropa } from '../ropa-list/Ropa';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})

export class InputIntegerComponent {

  
  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();



  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else {
      this.maxReached.emit("se alcanzo el max");
    }
  }

  
  changeQuantity(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = parseInt(input.value, 10);   // Convierte el string en número base 10

    if (isNaN(value)) {       // si no es un numero, se fuerza a 0.
      this.quantity = 0;
    } else if (value < 0) {   // si el valor es negativo, se fuerza a 0
      this.quantity = 0;
      input.value = '0'; 
    } else if (value > this.max) {  //si el usuario pone un numero mayor al stock, el valor se ajusta automáticamente al stock.
      this.quantity = this.max;
      input.value = this.max.toString();  
    } else {
      this.quantity = value;
      input.value = value.toString(); // esto elimina automaticamente los ceros innecesarios
    }
    this.quantityChange.emit(this.quantity);
  }

}
