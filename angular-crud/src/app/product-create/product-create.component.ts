import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsService } from '../product-details.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  newDetails!:any;
  createDetails !: FormGroup;
  submitted = false;
  constructor( private productser : ProductDetailsService, private fb: FormBuilder, private route: Router) { 
    this.productDetailsChecked()
    this.newDetails = this.productser.productDetails;
    console.log(this.newDetails);
  }

  ngOnInit(): void {
  }

  productDetailsChecked(){
    this.createDetails = this.fb.group({
      productName : ['',[Validators.required]],
      productId : ['',[Validators.required]],
      price : [null,[Validators.required , Validators.min(100), Validators.max(5000)]],
      brand : ['',[Validators.required]],
      quantity: [null,[Validators.required, Validators.min(10), Validators.max(500)]],
      productDescription: ['',[Validators.required]]
    })
  }

  createProductDetails(){
    this.submitted = true
    if(this.createDetails.valid){
      this.productser.productDetails.push(this.createDetails.value);
    console.log(this.productser.productDetails);
    this.route.navigate(['../']);
    }
  }


}
