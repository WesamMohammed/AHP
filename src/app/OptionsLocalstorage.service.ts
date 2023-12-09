import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsLocalstorageService {

constructor() { }

setOptions(options?:any[]){
  options=[
    {show:"Main Indicators Pairwise comparison (Primary indicators Vs. Secondary indicators)",value:2,selectValue:1,symboles:[
    {text:"Primary indicators",dependOn:2},
    {text:"Secondary indicators",dependOn:5},
  ],calculated:false,arrayResult:null,weightsResult:null,indicatoreValue:0,indicatoreCalculated:false},

  {show:"	Primary Indicators Pairwise comparison (Primary Indicators Pairwise comparison)",value:16,selectValue:2,symboles:[
    {text:"Energy Performance ",dependOn:3},
    {text:"Life Cycle Global Warming potential",dependOn:null},
    {text:"(Bill of quantities) Materials and Equipment",dependOn:null},
    {text:"Construction & demolishing waste and materials.",dependOn:4},
    {text:"Adaptability and Renovation",dependOn:null},
    {text:"Deconstruction",dependOn:null},
    {text:"Water Consumption",dependOn:null},
    {text:"Indoor Air Quality",dependOn:null},
    {text:"Time Outside of thermal Comfort Zone",dependOn:null},
    {text:"Lighting and Visual Comfort",dependOn:null},
    {text:"Acoustics and Noise",dependOn:null},
    {text:"Futureproof of Building Performance Against Climate Change",dependOn:null},
    {text:"Increased Risk Of Extreme Weather Events",dependOn:null},
    {text:"Sustainable Drainage",dependOn:null},
    {text:"Life Cycle Cost",dependOn:null},
    {text:"Value Creation and Risk Exposure",dependOn:null},
    ],calculated:false,arrayResult:null,weightsResult:null,indicatoreValue:0,indicatoreCalculated:false},
  
  {show:"	Sub-Primary Indicators Pairwise comparison (First Sub-Primary Indicators Pairwise comparison)",value:2,selectValue:3,symboles:[
    {text:"Total Energy Consumption",dependOn:null},
    {text:"Total Renewable Energy Consumption",dependOn:null},
    ],calculated:false,arrayResult:null,weightsResult:null,indicatoreValue:0,indicatoreCalculated:false},
  
  {show:"	Sub-Primary Indicators Pairwise comparison (Fourth Sub-Primary Indicators Pairwise comparison)",value:2,selectValue:4,symboles:[
    {text:"Waste in Construction Stage",dependOn:null},
    {text:"Waste in Demolishing Stage",dependOn:null},
    ],calculated:false,arrayResult:null,weightsResult:null,indicatoreValue:0,indicatoreCalculated:false},
  
  {show:"Secondary Indicators Pairwise comparison (Secondary Indicators Pairwise comparison)",value:8,selectValue:5,symboles:[
    {text:"Access to Care",dependOn:6},
    {text:"Continuity & Transition",dependOn:7},
    {text:"Involvement of Family & Friends",dependOn:8},
    {text:"Emotional Support & Alleviation of Fear and Anxiety",dependOn:9},
    {text:"Physical Comfort",dependOn:10},
    {text:"Information & Education",dependOn:11},
    {text:"Coordination & Integration of Care",dependOn:12},
    {text:"Respect to Patients’ Values Preferences & Needs",dependOn:13},
    ],calculated:false,arrayResult:null,weightsResult:null,indicatoreValue:0,indicatoreCalculated:false},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (First Sub-Secondary Indicators Pairwise comparison)",value:5,selectValue:6,symboles:[
    {text:"Access to healthcare location",dependOn:null},
    {text:"Appointment Availability when needed",dependOn:null},
    {text:"The ease of getting an appointment",dependOn:null},
    {text:"Timing",dependOn:null},
    {text:"The access to the services according to the exact needs",dependOn:null},
    ],calculated:false,arrayResult:null,weightsResult:null,indicatoreValue:0,indicatoreCalculated:false},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Second Sub-Secondary Indicators Pairwise comparison)",value:4,selectValue:7,symboles:[
    {text:"Ongoing treatment after discharge",dependOn:null},
    {text:"Timing",dependOn:null},
    {text:"Follow-up care",dependOn:null},
    {text:"Survivorship",dependOn:null},
    ],calculated:false,arrayResult:null,weightsResult:null,indicatoreValue:0,indicatoreCalculated:false},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Third Sub-Secondary Indicators Pairwise comparison)",value:4,selectValue:8,symboles:[
    {text:"Accommodations services to family and close fiends",dependOn:null},
    {text:"Recognizing family and friends needs",dependOn:null},
    {text:"Timing",dependOn:null},
    {text:"Family & friend’s involvement",dependOn:null},
    ],calculated:false,arrayResult:null,weightsResult:null,indicatoreValue:0,indicatoreCalculated:false},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Fourth Sub-Secondary Indicators Pairwise comparison)",value:4,selectValue:9,symboles:[
    {text:"Timing",dependOn:null},
    {text:"Psychological care",dependOn:null},
    {text:"Emotional support",dependOn:null},
    {text:"Patients involvement in informed d4ecesion",dependOn:null},
    ],calculated:false,arrayResult:null,weightsResult:null,indicatoreValue:0,indicatoreCalculated:false},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Fifth Sub-Secondary Indicators Pairwise comparison)",value:5,selectValue:10,symboles:[
    {text:"Pain management",dependOn:null},
    {text:"Assistant with activities and daily living needs",dependOn:null},
    {text:"Safety aspects",dependOn:null},
    {text:"Patient’s support to control physical complaints",dependOn:null},
    {text:"Physical comfort",dependOn:null},
    ],calculated:false,arrayResult:null,weightsResult:null,indicatoreValue:0,indicatoreCalculated:false},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Sixth Sub-Secondary Indicators Pairwise comparison)",value:7,selectValue:11,symboles:[
    {text:"Information on patient status and treatment progress",dependOn:null},
    {text:"Timing",dependOn:null},
    {text:"Information on medications use",dependOn:null},
    {text:"Patient’s involvement in shared decision-making",dependOn:null},
    {text:"Patient’s awareness in side effects",dependOn:null},
    {text:"Patient’s feedback (Regular Surveys)",dependOn:null},
    {text:"Privacy",dependOn:null},
    ],calculated:false,arrayResult:null,weightsResult:null,indicatoreValue:0,indicatoreCalculated:false},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Seventh Sub-Secondary Indicators Pairwise comparison)",value:9,selectValue:12,symboles:[
    {text:"Effective communication with patient ",dependOn:null},
    {text:"Technical expertise of healthcare professionals",dependOn:null},
    {text:"Patient had opportunities to ask questions",dependOn:null},
    {text:"Patient’s health history coordination",dependOn:null},
    {text:"Coordinated & integrated care",dependOn:null},
    {text:"Competent and Courteous staff (staff are trained, welcoming…",dependOn:null},
    {text:"Equip pharmacy, medical records & other allied services with automation and updated tech",dependOn:null},
    {text:"Patient centeredness polices are in place",dependOn:null},
    {text:"Patient centeredness implementation",dependOn:null},
    ],calculated:false,arrayResult:null,weightsResult:null,indicatoreValue:0,indicatoreCalculated:false},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Eighth Sub-Secondary Indicators Pairwise comparison)",value:7,selectValue:13,symboles:[
    {text:"Timing",dependOn:null},
    {text:"Transition services are available when needed",dependOn:null},
    {text:"Sensitivity to cultural differences and perceptions",dependOn:null},
    {text:"Patients treated with respect",dependOn:null},
    {text:"Considerations to patient values, preferences, and express needs",dependOn:null},
    {text:"Companionate care",dependOn:null},
    {text:"Equality (patient with special needs are given care..",dependOn:null},
    ],calculated:false,arrayResult:null,weightsResult:null,indicatoreValue:0,indicatoreCalculated:false},
  ]
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
