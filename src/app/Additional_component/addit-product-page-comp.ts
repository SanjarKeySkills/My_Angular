import {Component, OnInit} from "@angular/core";
import {ProductService} from "../../service/product.service";
import {ModalService} from "../../service/modal.service";


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html'
})
export class ProductPageComponent implements OnInit {
  isLoading = false
  search = ""
  constructor(
    public productsService: ProductService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true
    this.productsService.getProducts().subscribe(() =>
      this.isLoading = false
    )
  }
}
