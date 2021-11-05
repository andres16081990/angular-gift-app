import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  // esto es otra forma de trabajar inputs, lo mas recomendable son fomularios reactivos o formcontrol del angular para trabajar con el one way data binding
  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;

  constructor(private gifServices : GifsService){}
  
  searching(){
    const value = this.txtSearch.nativeElement.value;
    this.gifServices.searchGifs(value)
    this.txtSearch.nativeElement.value = '';
  }

}
