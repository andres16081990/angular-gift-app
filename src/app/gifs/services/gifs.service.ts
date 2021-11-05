import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGitResponse, Gif } from '../interface/gifs.interfaces';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history : string[] = [];
  private apiKey: string = 'CeWe4HeHZ34p7KYfvRSwQFVYWiRqdQq4';
  private urlService: string = 'https://api.giphy.com/v1/gifs'

   
  public results : Gif[]=[]

  get history(){
    // se rompe la relacion por eso se utiliza el spread operator, es para no modificar el arreglo original 
    return [...this._history];
  }
  //el construcctor se va a ejecutar cada vez que la aplicacion inicie, es como el use efect en react
  constructor(private http: HttpClient ) {
    this._history = JSON.parse(localStorage.getItem('history')!) ||[];
    this.results = JSON.parse(localStorage.getItem('results')!)|| [];

  }
  
  searchGifs(query:string){

    if(query === ''){
      return 
    }
    query =  query.trim().toLocaleLowerCase();
    if(!this._history.includes(query)){
      this._history.unshift(query);
      this._history = this._history.splice(0,20);
      localStorage.setItem('history',JSON.stringify(this._history));
    }
    // cuando utiliza el modulo http de angular, se trabaja en funcion de observables y no sobre promesas... el observable tiene mayo control que la promesa.
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit','20')
      .set('q',query)
    console.log(params.toString())

    
    this.http.get<SearchGitResponse>(`${this.urlService}/search?${params}`)
    .subscribe((res)=>{
      console.log(res.data);
      this.results = res.data;
      localStorage.setItem('results',JSON.stringify(res.data))
    })

  }
}
