import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  Editing = false;
  Creating = true;

  formGroupProduct: FormGroup;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private service: ProductService,
    private formBuilder: FormBuilder
  ) {
    this.formGroupProduct = this.formBuilder.group({
      id: [''],
      name: [''],
      price: [''],
      category: [''],
    });
  }

  ngOnInit() {
    const id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    if (id !== 0) {
      this.Editing = true;
      this.Creating = false;
      this.loadProduct(id);
    }
  }

  loadProduct(id: number) {
    this.service.getProductById(id).subscribe({
      next: (data) => this.formGroupProduct.setValue(data),
    });
  }

  update() {
    this.service.update(this.formGroupProduct.value).subscribe({
      next: () => {
        this.router.navigate(['products']);
        this.Editing = false;
      },
    });
  }

  save() {
    this.service.save(this.formGroupProduct.value).subscribe({
      next: () => {
        this.router.navigate(['products']);
        this.Creating = true;
      },
    });
  }
}
