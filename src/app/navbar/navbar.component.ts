import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  
  public isCollapsed = true;

  products:any;


  constructor() { }

  ngOnInit(): void {
  }


  // async getProduct(){
  //   try {
  //     const response = await axios.get('app/product-detail/product-detalil.component.ts')
  //     console.log('response.data--',response.data);
  //     console.log('response.status--',response.status);
  //     this.products =  response.data;
   
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}
