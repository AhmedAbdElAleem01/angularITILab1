import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../app/models/product';
import {ProductService} from '../../app/services/product';
import {Category} from '../../app/models/category';


interface Filter {
  title: string;
  category: string;
  minPrice: number;
  maxPrice: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone:false
})
export class ProductsComponent implements OnInit{

  constructor(private _productService:ProductService) {}

  ngOnInit(): void {
    this._productService.getProducts().subscribe(products => {this.products = products; this.loading = false})
    this._productService.getCategories().subscribe(categories => this.categories = categories)
    this._productService.getBanner().subscribe(banner => this.banner = banner)
  }

  products: Product[] = [

  ];

  categories: Category[] = [

  ]

  banner: string="";

  loading:boolean=true;

  filters: Filter = {
    title: '',
    category: '',
    minPrice: 0,
    maxPrice: Infinity
  };

  applyFilters(
    titleValue: string,
    categoryValue: string,
    minPriceValue: string,
    maxPriceValue: string
  ) {
    this.filters.title = titleValue.trim();
    this.filters.category = categoryValue.trim();
    this.filters.minPrice = minPriceValue ? +minPriceValue : 0;
    this.filters.maxPrice = maxPriceValue ? +maxPriceValue : Infinity;
  }

  resetFilters(
    titleInput: HTMLInputElement,
    categoryInput: HTMLSelectElement,
    minPriceInput: HTMLInputElement,
    maxPriceInput: HTMLInputElement
  ) {
    titleInput.value = '';
    categoryInput.value = '';
    minPriceInput.value = '';
    maxPriceInput.value = '';

    this.filters = {
      title: '',
      category: '',
      minPrice: 0,
      maxPrice: Infinity
    };
  }

  readonly INF = Infinity;


}
