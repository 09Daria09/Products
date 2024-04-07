import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css',
})

export class ShippingComponent implements OnInit{
  // Объявление переменной shippingCosts с типом Observable.
  // Это означает, что shippingCosts будет представлять поток асинхронных данных,
  // который можно подписываться для получения обновлений.
  shippingCosts!: Observable<{ type: string; price: number }[]>;

  // Использование ! после имени переменной (shippingCosts) указывает TypeScript, что мы гарантируем, что переменная будет инициализирована до использования, и TypeScript не должен выдавать предупреждения об этом. Это часто используется с переменными, которые будут инициализированы в конструкторе или в методе ngOnInit Angular-компонента.

  constructor(private cartService: CartService) {
    // Конструктор компонента
  }

  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }
}