import { Component, Input, OnInit } from '@angular/core';
import { OptionsLocalstorageService } from '../../OptionsLocalstorage.service';
export interface AHPCollection{
  options:Option[];
  numbers:number[];
  result:AHPResult;
}
export interface Option{
  symble:any;
  value:number;
  
}
export interface Mapping{
  symbole:string;
  others:string[];
}
export interface AHPResult{
selectedOption:number;
selectedNumber:number;
}
@Component({
  selector: 'app-Rad-But',
  templateUrl: './Rad-But.component.html',
  styleUrls: ['./Rad-But.component.css']
})

export class RadButComponent implements OnInit {
creterias=[
  {name:"Two",value:2},{name:"Three",value:3},{name:"Four",value:4},{name:"Five",value:5},{name:"Six",value:6},{name:"Seven",value:7},
  {name:"Eight",value:8},{name:"Nine",value:9},{name:"Ten",value:10},{name:"Elevent",value:11},{name:"Twelve",value:12},{name:"Thirteen",value:13},{name:"Fourteen",value:14},{name:"Fifteen",value:15},{name:"Sixtenn",value:16}

]
currentOption!:any;
 options!:any[];
symbles:any[]=[];
numbers:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9];
workingSymboles!:string[];
arrays: AHPCollection[] = []//[{options:[{symble:'A',value:1}, {symble:'B',value:2}],numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9],result:{selectedOption:1,selectedNumber:1}}]; // Array of radio button options // Array of radio button options
@Input() selectedOption=1;
  numCretirea:number=2;
  constructor(private optionsService: OptionsLocalstorageService) { 
     this.options=optionsService.getOptions();



  }
  arrayResult:number[][]=[];
  weightsResult:number[]=[];

  ngOnInit() {
    this.currentOption=this.options.find(a=>a.selectValue===this.selectedOption);
    
    
    this.symbles=(this.currentOption.symboles)
    this.numCretirea=this.currentOption.value;
    if(this.currentOption.arrayResult){
      this.arrayResult=this.currentOption.arrayResult;
    }
    if(this.currentOption.weightsResult){
      this.weightsResult=this.currentOption.weightsResult
    }
 this.ChangeView()
  }
  ChangeView() {
    this.arrays=[];
    const syms=this.symbles.slice(0,this.numCretirea);
    this.workingSymboles=[...syms];
    const ops=this.GetMapping(syms);
    ops.forEach(a=>{
      
      
      a.others.forEach(b=>{
        this.arrays.push({options:[{symble:a.symbole,value:1}, {symble:b,value:2}],numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9],result:{selectedOption:1,selectedNumber:1}})
      })
      
    })
    
  }
GetMapping(symbles:string[]):Mapping[]{
  console.log("criti:",this.numCretirea);
  
  let map:Mapping[]=[];
  const arr=[...symbles.slice(0,-1)]
  arr.forEach((s,i)=>{
    
    
    map.push({symbole:s,others:[...symbles.slice(i+1)]})
  })
  return map;
}
CalculateAHP(){
  let index=0;
for(let i=0;i<this.numCretirea;i++){
  this.arrayResult[i]??=[];
  for(let j=0;j<this.numCretirea;j++){
    this.arrayResult[j]!??=[];
    if(i===j){
      this.arrayResult[i][j]=1;
    }
    else if(j>i){
      let s=this.arrays[index]
      if(s.result.selectedOption===1){
        this.arrayResult[i][j]=s.result.selectedNumber;
        this.arrayResult[j][i]=Math.round((1.0/s.result.selectedNumber)*100)/100;
      }
      else if(s.result.selectedOption===2){
        this.arrayResult[i][j]=Math.round((1.0/s.result.selectedNumber)*100)/100;;
        this.arrayResult[j][i]=s.result.selectedNumber;
      }
      else{
        console.log("error");
        
      }
      index++;
    }
    // else{
    //   continue;
    // }
  }
}

this.CalculateWeights();
this.currentOption.calculated=true;
this.currentOption.weightsResult=this.weightsResult;
this.currentOption.arrayResult=this.arrayResult;
this.optionsService.updateOptions(this.options);

}
  CalculateWeights() {
    this.weightsResult=[]
    
    this.arrayResult.forEach(row=>{
      let result=1.0;
      row.forEach(val=>{
        result *=val;
      })
      let root=Math.pow(result,1/this.numCretirea);
      this.weightsResult.push(Math.round(root*1000)/1000);

    })

    let sum = this.weightsResult.reduce((acc, current) => acc + current, 0);
    console.log("sum:",sum);
    for(let i=0;i<this.weightsResult.length;i++){
      let v=this.weightsResult[i]/sum;
      this.weightsResult[i]=Math.round(v*1000)/1000;
      
      
    }
  
    
    
  }
}
