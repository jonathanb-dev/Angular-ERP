import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initProductForm();
  }

  initProductForm(): void {
    this.productForm = new FormGroup({
      'id': new FormControl(null),
      'price': new FormControl(null)
    });
  }
}
