import { Component } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  clique(){
    alert("Hello World");
  }
  
  public inputValue:string;
  
  newWord(){
    
    alert(this.inputValue)
  }
  equipe(){
    alert("Alberto Vidal\nGuilherme Magno\nIgorRegueira\nJamesson Vinicius\nJuliana Dornelas\nNilo Rodrigues\nPedro Calazans\nRosicleite Monteiro");
  }
}

  
