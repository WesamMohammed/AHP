import { Component, Input, OnInit } from '@angular/core';
import { OptionsLocalstorageService } from '../../OptionsLocalstorage.service';
import { AHPCollection, Mapping } from '../Rad-But/Rad-But.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteBackService } from '../../route-back/route-back.service';
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
  items:any[]=[{title:"LifeCycle",link:"/lifecycle",command:()=>{
    this.router.navigate(["/lifecycle"])}
  },{title:"Page2",link:"/page2",command:()=>{
    this.router.navigate(["/page2"])}},{title:"Indicators Options",command:()=>{
      this.router.navigate(["/indicators"])}},{title:"indicator"}]
  currentOption!:any;
  disableCalculate=false;
  value=0;
  selectValue=1;
  options!:any[];
 symbles:any[]=[];
 numbers:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9];
 workingSymboles!:any[];
 arrays: AHPCollection[] = []//[{options:[{symble:'A',value:1}, {symble:'B',value:2}],numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9],result:{selectedOption:1,selectedNumber:1}}]; // Array of radio button options // Array of radio button options
 @Input() selectedOption=1;
   numCretirea:number=2;
   constructor(private optionsService: OptionsLocalstorageService,private route: ActivatedRoute,private router:Router,private routeBack:RouteBackService) { 
      this.options=optionsService.getOptions();
 this.routeBack.setBreadcrumbs(this.items);
 
 
   }
   arrayResult:number[][]=[];
   weightsResult:number[]=[];
   weightsResultWithUser:any[]=[];
 
   ngOnInit() {
    this.route.paramMap.subscribe(params => {
     
      const idParam = params.get('id');
      this.selectedOption = idParam ? parseInt(idParam, 10) : 2;
   });
     this.currentOption=this.options.find(a=>a.selectValue===this.selectedOption);
     console.log("currentOption:",this.currentOption);
     
     this.symbles=(this.currentOption.symboles);
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
    
    
    this.weightsResult.forEach((a,index)=>{
      let dependOn=this.symbles[index].dependOn;
      const data={text:this.symbles[index].text,programeWeight:a,userWeight:0,message:'',byUser:true};
      if(dependOn){
        let d=this.options.find(a=>a.selectValue===dependOn);
        data.byUser=false;
        data.message='';
        if(d?.indicatoreCalculated){
          data.userWeight=d.indicatoreValue
        }else{
          this.disableCalculate=true
          data.message=` ${d.show} must be culculated`;
        }
        
      }
     
      this.weightsResultWithUser.push(data);
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
    let error=false;
    if(this.weightsResultWithUser.length<=0){
      error=true;
    }
    this.weightsResultWithUser.forEach(element => {
      if(element.userWeight<=0|| element.userWeight>1){
        error=true;
        if(element.byUser){
          element.message="must be greater than 0 and less or equal 1"
        }
      };
      
    });
    if(error){
      return;
    }
    let factor=0;
    let sum=0;
    this.weightsResultWithUser.forEach(a=>{
      factor +=(a.programeWeight * a.userWeight);
      sum +=a.programeWeight;
    })
this.value=factor/sum;

this.currentOption.indicatoreValue=this.value;
this.currentOption.indicatoreCalculated=true;
this.optionsService.updateOptions(this.options)

  }
}
