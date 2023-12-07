import { Component, OnInit } from '@angular/core';
import { OptionsLocalstorageService } from '../../OptionsLocalstorage.service';


@Component({
  selector: 'app-options2',
  templateUrl: './options2.component.html',
  styleUrls: ['./options2.component.css']
})
export class Options2Component implements OnInit {
  options=[{show:"Main Indicators Pairwise comparison (Primary indicators Vs. Secondary indicators)",value:2,selectValue:1,symboles:["Primary indicators",
  "Secondary indicators"
  ],calculated:false,arrayResult:null,weightsResult:null},

  {show:"	Primary Indicators Pairwise comparison (Primary Indicators Pairwise comparison)",value:16,selectValue:2,symboles:[
    "Energy Performance ",
    "Life Cycle Global Warming potential",
    "(Bill of quantities) Materials and Equipment",
    "Construction & demolishing waste and materials.",
    "Adaptability and Renovation",
    "Deconstruction",
    "Water Consumption",
    "Indoor Air Quality",
    "Time Outside of thermal Comfort Zone",
    "Lighting and Visual Comfort",
    "Acoustics and Noise",
    "Futureproof of Building Performance Against Climate Change",
    "Increased Risk Of Extreme Weather Events",
    "Sustainable Drainage",
    "Life Cycle Cost",
    "Value Creation and Risk Exposure",
    ],calculated:false,arrayResult:null,weightsResult:null},
  
  {show:"	Sub-Primary Indicators Pairwise comparison (First Sub-Primary Indicators Pairwise comparison)",value:2,selectValue:3,symboles:[
    "Total Energy Consumption",
    "Total Renewable Energy Consumption",
    ],calculated:false,arrayResult:null,weightsResult:null},
  
  {show:"	Sub-Primary Indicators Pairwise comparison (Fourth Sub-Primary Indicators Pairwise comparison)",value:2,selectValue:4,symboles:[
    "Waste in Construction Stage",
    "Waste in Demolishing Stage",
    ],calculated:false,arrayResult:null,weightsResult:null},
  
  {show:"Secondary Indicators Pairwise comparison (Secondary Indicators Pairwise comparison)",value:8,selectValue:5,symboles:[
    "Access to Care",
    "Continuity & Transition",
    "Involvement of Family & Friends",
    "Emotional Support & Alleviation of Fear and Anxiety",
    "Physical Comfort",
    "Information & Education",
    "Coordination & Integration of Care",
    "Respect to Patients’ Values Preferences & Needs",
    ],calculated:false,arrayResult:null,weightsResult:null},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (First Sub-Secondary Indicators Pairwise comparison)",value:5,selectValue:6,symboles:[
    "Access to healthcare location",
    "Appointment Availability when needed",
    "The ease of getting an appointment",
    "Timing",
    "The access to the services according to the exact needs",
    ],calculated:false,arrayResult:null,weightsResult:null},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Second Sub-Secondary Indicators Pairwise comparison)",value:4,selectValue:7,symboles:[
    "Ongoing treatment after discharge",
    "Timing",
    "Follow-up care",
    "Survivorship",
    ],calculated:false,arrayResult:null,weightsResult:null},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Third Sub-Secondary Indicators Pairwise comparison)",value:4,selectValue:8,symboles:[
    "Accommodations services to family and close fiends",
    "Recognizing family and friends needs",
    "Timing",
    "Family & friend’s involvement",
    ],calculated:false,arrayResult:null,weightsResult:null},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Fourth Sub-Secondary Indicators Pairwise comparison)",value:4,selectValue:9,symboles:[
    "Timing",
    "Psychological care",
    "Emotional support",
    "Patients involvement in informed d4ecesion",
    ],calculated:false,arrayResult:null,weightsResult:null},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Fifth Sub-Secondary Indicators Pairwise comparison)",value:5,selectValue:10,symboles:[
    "Pain management",
    "Assistant with activities and daily living needs",
    "Safety aspects",
    "Patient’s support to control physical complaints",
    "Physical comfort",
    ],calculated:false,arrayResult:null,weightsResult:null},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Sixth Sub-Secondary Indicators Pairwise comparison)",value:7,selectValue:11,symboles:[
    "Information on patient status and treatment progress",
    "Timing",
    "Information on medications use",
    "Patient’s involvement in shared decision-making",
    "Patient’s awareness in side effects",
    "Patient’s feedback (Regular Surveys)",
    "Privacy",
    ],calculated:false,arrayResult:null,weightsResult:null},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Seventh Sub-Secondary Indicators Pairwise comparison)",value:9,selectValue:12,symboles:[
    "Effective communication with patient ",
    "Technical expertise of healthcare professionals",
    "Patient had opportunities to ask questions",
    "Patient’s health history coordination",
    "Coordinated & integrated care",
    "Competent and Courteous staff (staff are trained, welcoming…",
    "Equip pharmacy, medical records & other allied services with automation and updated tech",
    "Patient centeredness polices are in place",
    "Patient centeredness implementation",
    ],calculated:false,arrayResult:null,weightsResult:null},
  
  {show:"Sub-Secondary Indicators Pairwise comparison (Eighth Sub-Secondary Indicators Pairwise comparison)",value:7,selectValue:13,symboles:[
    "Timing",
    "Transition services are available when needed",
    "Sensitivity to cultural differences and perceptions",
    "Patients treated with respect",
    "Considerations to patient values, preferences, and express needs",
    "Companionate care",
    "Equality (patient with special needs are given care..",
    ],calculated:false,arrayResult:null,weightsResult:null},
  ]
  constructor(private optionsService: OptionsLocalstorageService) { 
    optionsService.setOptions(this.options);
  }

  ngOnInit() {
    this.options=this.optionsService.getOptions();
  }

}
