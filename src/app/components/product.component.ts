import { Component, Input, Output, EventEmitter,OnChanges, SimpleChanges,OnInit, DoCheck,OnDestroy } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls:['./product.component.scss']
})
export class ProductComponent implements OnChanges,OnInit,DoCheck,OnDestroy{
  @Input() product: Product; // Enviar  datos
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date()

  constructor(){
    console.log('1. contructor')
  }

  ngOnChanges(changes:SimpleChanges){
    // Detecta el estado anterior y el nuevo
    console.log('2. ngOnChanges')
    // console.log(changes)
  }

  ngOnInit(){
    // Cuando se inicia un peticion
    console.log('3. ngOnInit')
  }

  ngDoCheck(){
    console.log('4. ngDoCheck')
  }

  ngOnDestroy(){
    console.log('5. ngOnDestroy')
  }

  addCart() {
    console.log('anadir al carrito');
    this.productClicked.emit(this.product.id);
  }
}
