import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SharedModule } from '../shared/shared.module';
import { PagerComponent } from '../shared/components/pager/pager.component';
import { PagingHeaderComponent } from '../shared/components/paging-header/paging-header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ShopComponent, ProductItemComponent, PagerComponent, PagingHeaderComponent, ProductDetailsComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [ShopComponent],
})
export class ShopModule {}
