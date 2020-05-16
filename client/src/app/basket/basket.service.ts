import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { IBasket, IBasketItem, Basket, IBasketTotals } from '../shared/models/basket';
import { map } from 'rxjs/operators';
import { IProduct } from '../shared/models/product';

@Injectable({
  providedIn: "root",
})
export class BasketService {
  baseUrl = environment.apiUrl;
  private basketSource = new BehaviorSubject<IBasket>(null);
  private basketTotalSource = new BehaviorSubject<IBasketTotals>(null);
  basketTotal$ = this.basketTotalSource.asObservable();
  basket$ = this.basketSource.asObservable();

  constructor(private httpClient: HttpClient) {}
  getBasket(id: string) {
    return this.httpClient.get(this.baseUrl + "basket?id=" + id).pipe(
      map((basket: IBasket) => {
        this.basketSource.next(basket);
        this.calculateTotals();
      })
    );
  }
  setBasket(basket: IBasket) {
    return this.httpClient.post(this.baseUrl + "basket", basket).subscribe(
      (response: IBasket) => {
        this.basketSource.next(response);
        this.calculateTotals();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getCurrentBasketValue() {
    return this.basketSource.value;
  }
  addItemToBasket(item: IProduct, quantity = 1) {
    const itemToAdd: IBasketItem = this.mapProductItemToBasketItem(
      item,
      quantity
    );

    let basket = this.getCurrentBasketValue();
    if (basket === null) {
      basket = this.createBasket();
    }
    console.log(basket);
    basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity);
    this.setBasket(basket);
  }
  addOrUpdateItem(
    items: IBasketItem[],
    itemToAdd: IBasketItem,
    quantity: number
  ): IBasketItem[] {
    const index = items.findIndex((i) => i.id === itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    } else {
      items[index].quantity += quantity;
    }
    return items;
  }
  createBasket(): IBasket {
    const basket = new Basket();
    localStorage.setItem("basket_id", basket.id);
    return basket;
  }
  mapProductItemToBasketItem(item: IProduct, quantity: number): IBasketItem {
    return {
      id: item.id,
      productName: item.name,
      price: item.price,
      pictureUrl: item.pictureUrl,
      quantity,
      brand: item.productBrand,
      type: item.productType,
    };
  }
  private calculateTotals(){
    const basket = this.getCurrentBasketValue();
    const shipping = 0;
    const subTotal = basket.items.reduce((a, b) => b.price * b.quantity + a, 0);
    const total = subTotal + shipping;
    this.basketTotalSource.next({shipping, total, subTotal});
  }
}
