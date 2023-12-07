import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsLocalstorageService {

constructor() { }

setOptions(options:any[]){
var opt=localStorage.getItem("options");
if(opt){
  return;
}
this.updateOptions(options);
}
getOptions(){
  let options=localStorage.getItem('options');
  let storedOptions:any;
  if(options){
    storedOptions = JSON.parse(options);
  }
  
return storedOptions;
}
updateOptions(options:any[]){
  localStorage.setItem("options",JSON.stringify(options));
}
}
