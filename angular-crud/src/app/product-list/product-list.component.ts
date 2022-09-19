import { Component, OnInit } from '@angular/core';
import { ProductCreateComponent } from '../product-create/product-create.component';
import { ProductDetailsService } from '../product-details.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayValue;

  constructor(private productcom : ProductDetailsService) {

    this.displayValue = productcom.productDetails;
    console.log(this.displayValue);
   }

  ngOnInit(): void {
  }

  deleteData(id:any){
    this.displayValue.splice(id,1);
  }


}
