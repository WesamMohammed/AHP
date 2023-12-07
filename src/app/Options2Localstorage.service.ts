import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Options2LocalstorageService {

constructor() { }

setOptions2(options2:any[]){
var opt=localStorage.getItem("options2");
if(opt){
  return;
}
this.updateOptions2(options2);
}
getOptions2(){
  let options2=localStorage.getItem('options2');
  let storedOptions2:any;
  if(options2){
    storedOptions2 = JSON.parse(options2);
  }
  
return storedOptions2;
}
updateOptions2(options2:any[]){
  localStorage.setItem("options2",JSON.stringify(options2));
}
}
