import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsLocalstorageService {

constructor() { }

setOptions(options?:any[]){
  options=[
    {show:"Main Indicators Pairwise comparison (Primary indicators Vs. Secondary indicators)",value:2,selectValue:1,symboles:[
    {text:"Primary indicators",dependOn:2,userWeights:[]},
    {text:"Secondary indicators",dependOn:5,userWeights:[]},
  ],calculated:false,arrayResult:null,weightsResult:[0.667,0.333],indicatoreValue:0,indicatoreCalculated:false,userWeights:[]},

  {show:"	Primary Indicators Pairwise comparison (Primary Indicators Pairwise comparison)",value:16,selectValue:2,symboles:[
    {text:"Energy Performance ",dependOn:3,userWeights:[]},
    {text:"Life Cycle Global Warming potential",dependOn:null,userWeights:[]},
    {text:"(Bill of quantities) Materials and Equipment",dependOn:null,userWeights:[]},
    {text:"Construction & demolishing waste and materials.",dependOn:4,userWeights:[]},
    {text:"Adaptability and Renovation",dependOn:null,userWeights:[]},
    {text:"Deconstruction",dependOn:null,userWeights:[]},
    {text:"Water Consumption",dependOn:null,userWeights:[]},
    {text:"Indoor Air Quality",dependOn:null,userWeights:[]},
    {text:"Time Outside of thermal Comfort Zone",dependOn:null,userWeights:[]},
    {text:"Lighting and Visual Comfort",dependOn:null,userWeights:[]},
    {text:"Acoustics and Noise",dependOn:null,userWeights:[]},
    {text:"Futureproof of Building Performance Against Climate Change",dependOn:null,userWeights:[]},
    {text:"Increased Risk Of Extreme Weather Events",dependOn:null,userWeights:[]},
    {text:"Sustainable Drainage",dependOn:null,userWeights:[]},
    {text:"Life Cycle Cost",dependOn:null,userWeights:[]},
    {text:"Value Creation and Risk Exposure",dependOn:null,userWeights:[]},
    ],calculated:false,arrayResult:null,weightsResult:[0.272,0.065,0.052,0.038,0.042,0.043,0.106,0.040,0.038,0.047,0.040,0.047,0.045,0.041,0.044,0.039],indicatoreValue:0,indicatoreCalculated:false,userWeights:[]},
  
  {show:"	Sub-Primary Indicators Pairwise comparison (First Sub-Primary Indicators Pairwise comparison)",value:2,selectValue:3,symboles:[
    {text:"Total Energy Consumption",dependOn:null,userWeights:[]},
    {text:"Total Renewable Energy Consumption",dependOn:null,userWeights:[]},
    ],calculated:false,arrayResult:null,weightsResult:[0.800,0.200],indicatoreValue:0,indicatoreCalculated:false,userWeights:[]},
  
  {show:"	Sub-Primary Indicators Pairwise comparison (Fourth Sub-Primary Indicators Pairwise comparison)",value:2,selectValue:4,symboles:[
    {text:"Waste in Construction Stage",dependOn:null,userWeights:[]},
    {text:"Waste in Demolishing Stage",dependOn:null,userWeights:[]},
    ],calculated:false,arrayResult:null,weightsResult:[0.750,0.250],indicatoreValue:0,indicatoreCalculated:false,userWeights:[]},
  
  {show:"Secondary Indicators Pairwise comparison (Secondary Indicators Pairwise comparison)",value:8,selectValue:5,symboles:[
    {text:"Access to Care",dependOn:6,userWeights:[]},
    {text:"Continuity & Transition",dependOn:7,userWeights:[]},
    {text:"Involvement of Family & Friends",dependOn:8,userWeights:[]},
    {text:"Emotional Support & Alleviation of Fear and Anxiety",dependOn:9,userWeights:[]},
    {text:"Physical Comfort",dependOn:10,userWeights:[]},
    {text:"Information & Education",dependOn:11,userWeights:[]},
    {text:"Coordination & Integration of Care",dependOn:12,userWeights:[]},
    {text:"Respect to Patients’ Values Preferences & Needs",dependOn:13,userWeights:[]},
    ],calculated:false,arrayResult:null,weightsResult:[0.370,0.146,0.076,0.054,0.143,0.065,0.091,0.046],indicatoreValue:0,indicatoreCalculated:false,userWeights:[]},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (First Sub-Secondary Indicators Pairwise comparison)",value:5,selectValue:6,symboles:[
    {text:"Access to healthcare location",dependOn:null,userWeights:[]},
    {text:"Appointment Availability when needed",dependOn:null,userWeights:[]},
    {text:"The ease of getting an appointment",dependOn:null,userWeights:[]},
    {text:"Timing",dependOn:null,userWeights:[]},
    {text:"The access to the services according to the exact needs",dependOn:null,userWeights:[]},
    ],calculated:false,arrayResult:null,weightsResult:[0.221,0.223,0.124,0.277,0.155],indicatoreValue:0,indicatoreCalculated:false,userWeights:[]},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Second Sub-Secondary Indicators Pairwise comparison)",value:4,selectValue:7,symboles:[
    {text:"Ongoing treatment after discharge",dependOn:null,userWeights:[]},
    {text:"Timing",dependOn:null,userWeights:[]},
    {text:"Follow-up care",dependOn:null,userWeights:[]},
    {text:"Survivorship",dependOn:null,userWeights:[]},
    ],calculated:false,arrayResult:null,weightsResult:[0.476,0.289,0.176,0.059],indicatoreValue:0,indicatoreCalculated:false,userWeights:[]},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Third Sub-Secondary Indicators Pairwise comparison)",value:4,selectValue:8,symboles:[
    {text:"Accommodations services to family and close fiends",dependOn:null,userWeights:[]},
    {text:"Recognizing family and friends needs",dependOn:null,userWeights:[]},
    {text:"Timing",dependOn:null,userWeights:[]},
    {text:"Family & friend’s involvement",dependOn:null,userWeights:[]},
    ],calculated:false,arrayResult:null,weightsResult:[0.392,0.144,0.320,0.144],indicatoreValue:0,indicatoreCalculated:false,userWeights:[]},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Fourth Sub-Secondary Indicators Pairwise comparison)",value:4,selectValue:9,symboles:[
    {text:"Timing",dependOn:null,userWeights:[]},
    {text:"Psychological care",dependOn:null,userWeights:[]},
    {text:"Emotional support",dependOn:null,userWeights:[]},
    {text:"Patients involvement in informed d4ecesion",dependOn:null,userWeights:[]},
    ],calculated:false,arrayResult:null,weightsResult:[0.432,0.190,0.213,0.165],indicatoreValue:0,indicatoreCalculated:false,userWeights:[]},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Fifth Sub-Secondary Indicators Pairwise comparison)",value:5,selectValue:10,symboles:[
    {text:"Pain management",dependOn:null,userWeights:[]},
    {text:"Assistant with activities and daily living needs",dependOn:null,userWeights:[]},
    {text:"Safety aspects",dependOn:null,userWeights:[]},
    {text:"Patient’s support to control physical complaints",dependOn:null,userWeights:[]},
    {text:"Physical comfort",dependOn:null,userWeights:[]},
    ],calculated:false,arrayResult:null,weightsResult:[0.354,0.100,0.235,0.093,0.218],indicatoreValue:0,indicatoreCalculated:false,userWeights:[]},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Sixth Sub-Secondary Indicators Pairwise comparison)",value:7,selectValue:11,symboles:[
    {text:"Information on patient status and treatment progress",dependOn:null,userWeights:[]},
    {text:"Timing",dependOn:null,userWeights:[]},
    {text:"Information on medications use",dependOn:null,userWeights:[]},
    {text:"Patient’s involvement in shared decision-making",dependOn:null,userWeights:[]},
    {text:"Patient’s awareness in side effects",dependOn:null,userWeights:[]},
    {text:"Patient’s feedback (Regular Surveys)",dependOn:null,userWeights:[]},
    {text:"Privacy",dependOn:null,userWeights:[]},
    ],calculated:false,arrayResult:null,weightsResult:[0.160,0.281,0.157,0.104,0.099,0.074,0.124],indicatoreValue:0,indicatoreCalculated:false,userWeights:[]},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Seventh Sub-Secondary Indicators Pairwise comparison)",value:9,selectValue:12,symboles:[
    {text:"Effective communication with patient ",dependOn:null,userWeights:[]},
    {text:"Technical expertise of healthcare professionals",dependOn:null,userWeights:[]},
    {text:"Patient had opportunities to ask questions",dependOn:null,userWeights:[]},
    {text:"Patient’s health history coordination",dependOn:null,userWeights:[]},
    {text:"Coordinated & integrated care",dependOn:null,userWeights:[]},
    {text:"Competent and Courteous staff (staff are trained, welcoming…",dependOn:null,userWeights:[]},
    {text:"Equip pharmacy, medical records & other allied services with automation and updated tech",dependOn:null,userWeights:[]},
    {text:"Patient centeredness polices are in place",dependOn:null,userWeights:[]},
    {text:"Patient centeredness implementation",dependOn:null,userWeights:[]},
    ],calculated:false,arrayResult:null,weightsResult:[0.068,0.225,0.096,0.103,0.122,0.061,0.069,0.125,0.132],indicatoreValue:0,indicatoreCalculated:false,userWeights:[]},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Eighth Sub-Secondary Indicators Pairwise comparison)",value:7,selectValue:13,symboles:[
    {text:"Timing",dependOn:null,userWeights:[]},
    {text:"Transition services are available when needed",dependOn:null,userWeights:[]},
    {text:"Sensitivity to cultural differences and perceptions",dependOn:null,userWeights:[]},
    {text:"Patients treated with respect",dependOn:null,userWeights:[]},
    {text:"Considerations to patient values, preferences, and express needs",dependOn:null,userWeights:[]},
    {text:"Companionate care",dependOn:null,userWeights:[]},
    {text:"Equality (patient with special needs are given care..",dependOn:null,userWeights:[]},
    ],calculated:false,arrayResult:null,weightsResult:[0.289,0.064,0.129,0.136,0.127,0.144,0.110],indicatoreValue:0,indicatoreCalculated:false,userWeights:[]},
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
