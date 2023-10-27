import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { Product } from '../../models/Product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addproduct',
  templateUrl: './ajout-product.component.html',
})
export class AddProductComponent implements OnInit {
  product = new Product(); // Use the Product model
  data: any;
  form: FormGroup;

  constructor(private productService: DataService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      image_url: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.product = this.form.value;
      this.productService.addProduct(this.product).subscribe(
        (response) => {
          this.data = response;
          console.log(this.data);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product added successfully',
            showConfirmButton: false,
            timer: 1000,
          });
        },
        (error) => {
          console.error('Error adding product', error);
        }
      );
    }
  }
}
