import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsService } from '../product-details.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  upadateValue!: {};
  editDetails!: FormGroup;
  id!: any;
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private productser: ProductDetailsService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.upadateValue = this.productser.productDetails[this.id];
    console.log(this.upadateValue);
    this.productDetailsUpdate();
  }

  ngOnInit(): void {
    this.editDetails.patchValue(this.upadateValue);
  }

  productDetailsUpdate() {
    this.editDetails = this.fb.group({
      productName: ['', [Validators.required]],
      productId: ['', [Validators.required]],
      price: [null, [Validators.required, Validators.min(100), Validators.max(5000)]],
      brand: ['', [Validators.required]],
      quantity: [null, [Validators.required, Validators.min(10), Validators.max(500)]],
      productDescription: ['', [Validators.required]],
    });
  }

  editProductDetails() {
    this.submitted = true;
    if (this.editDetails.valid) {
      this.productser.productDetails[this.id] = this.editDetails.value;
      console.log(this.productser.productDetails[this.id]);
      this.router.navigate(['../../']);
    }
  }
}
