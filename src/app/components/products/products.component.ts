import { Component } from '@angular/core';


interface Product {
  title: string;
  category: string;
  price: number,
  stock:number,
  imageUrl: string;
}


@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: Product[] = [
    { title: 'Chocolate Cake', category: 'Cake', price: 25, stock:9 , imageUrl:"bake2.jpg"},
    { title: 'Croissant', category: 'Pastry', price: 5 , stock:33, imageUrl:"bake1.jpg"},
    { title: 'Baguette', category: 'Bread', price: 3 , stock:12, imageUrl:"bake3.jpg"},
    { title: 'Cupcake', category: 'Cake', price: 4 , stock:90, imageUrl:"cup1.jpg"}
  ];

  filters = {
    category: '',
    title: '',
    maxPrice: Infinity
  };

  onFilterChange(filterName: 'category' | 'title' | 'maxPrice', value: string) {
    if (filterName === 'maxPrice') {
      this.filters.maxPrice = value ? +value : Infinity;
    } else {
      this.filters[filterName] = value;
    }
  }


  get filteredProducts() {
    return this.products.filter(p =>
      (!this.filters.category || p.category.includes(this.filters.category)) &&
      (!this.filters.title || p.title.toLowerCase().includes(this.filters.title.toLowerCase())) &&
      (p.price <= this.filters.maxPrice)
    );
  }

  protected readonly Infinity = Infinity;
}
