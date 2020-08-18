import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"
  imbueUrl = "http://localhost:3001/imbuement"
  levelUrl = "http://localhost:3001/level"


  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  getImbuement(): Observable<string[]> {
    return this.http.get<string[]>(this.imbueUrl)
  }

  getLevel(): Observable<string[]> {
    return this.http.get<string[]>(this.levelUrl)
  }

  getById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }
  
}
