import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.getById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.product.id).subscribe(() => {
      this.productService.showMessage('Produto excluído com sucesso.')
      this.router.navigate(["/products"])
    })
  }

  cancel(): void {
    this.router.navigate(["/products"])
  }

}
