import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    quantity: null,
    level: '',
    imbuement: ''
  }

  imbuement: string[]
  level:string[]

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getImbuement().subscribe((e) => {
      this.imbuement = e;
    })
    this.productService.getLevel().subscribe((e) =>{
      this.level = e;
    })
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado.')
      this.router.navigate(['/products'])
    });
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
