import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponentComponent } from './gifs-page-component/gifs-page-component.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    GifsPageComponentComponent,
    SearchComponent,
    ResultsComponent
  ],
  exports:[
    GifsPageComponentComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class GifsModule { }
