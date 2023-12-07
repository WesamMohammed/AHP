import { Component, Input, OnInit } from '@angular/core';
import { OptionsLocalstorageService } from '../../OptionsLocalstorage.service';
import { AHPCollection, Mapping } from '../Rad-But/Rad-But.component';
import { ActivatedRoute } from '@angular/router';
export interface WeightsWithUsers{
  programeWeight:number;
  userWeight:number;
}
@Component({
  selector: 'app-using-indicators',
  templateUrl: './using-indicators.component.html',
  styleUrls: ['./using-indicators.component.css']
})
export class UsingIndicatorsComponent implements OnInit {
  currentOption!:any;
  value=0;
  selectValue=1;
  options!:any[];
 symbles:string[]=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"];
 numbers:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9];
 workingSymboles!:string[];
 arrays: AHPCollection[] = []//[{options:[{symble:'A',value:1}, {symble:'B',value:2}],numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9],result:{selectedOption:1,selectedNumber:1}}]; // Array of radio button options // Array of radio button options
 @Input() selectedOption=1;
   numCretirea:number=2;
   constructor(private optionsService: OptionsLocalstorageService,private route: ActivatedRoute) { 
      this.options=optionsService.getOptions();
 
 
 
   }
   arrayResult:number[][]=[];
   weightsResult:number[]=[];
   weightsResultWithUser:WeightsWithUsers[]=[];
 
   ngOnInit() {
    this.route.paramMap.subscribe(params => {
     
      const idParam = params.get('id');
      this.selectedOption = idParam ? parseInt(idParam, 10) : 2;
   });
     this.currentOption=this.options.find(a=>a.selectValue===this.selectedOption);
     console.log("currentOption:",this.currentOption);
     
     this.symbles=this.currentOption.symboles;
     this.numCretirea=this.currentOption.value;
     if(this.currentOption.arrayResult){
      this.arrayResult=this.currentOption.arrayResult;
    }
    if(this.currentOption.weightsResult){
      this.weightsResult=this.currentOption.weightsResult
    }
     this.ChangeView()
     this.SetWeightsWithUser()
    }
  SetWeightsWithUser() {
    
    
    this.weightsResult.forEach(a=>{
      this.weightsResultWithUser.push({programeWeight:a,userWeight:0});
    })
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
  Calculate(){
    let factor=0;
    let sum=0;
    this.weightsResultWithUser.forEach(a=>{
      factor +=(a.programeWeight * a.userWeight);
      sum +=a.programeWeight;
    })
this.value=factor/sum;

console.log("finalValue:",this.value);

  }
}
