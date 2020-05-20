import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  public printToConsole(arg){
    console.log(arg);
  }
}
