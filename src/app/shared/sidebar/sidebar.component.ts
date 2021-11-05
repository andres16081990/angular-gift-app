import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent{

  get history(){
    return this.gifsService.history
  }
  constructor(private gifsService:GifsService) { }

  searchInHistory(termn:string){
    this.gifsService.searchGifs(termn)
  }
}
