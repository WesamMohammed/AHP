import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
options=[{show:"	Main Indicators Pairwise comparison (Primary indicators Vs. Secondary indicators)",value:"2"},

  {show:"	Primary Indicators Pairwise comparison (Primary Indicators Pairwise comparison)",value:""},
  
  {show:"	Sub-Primary Indicators Pairwise comparison (First Sub-Primary Indicators Pairwise comparison)",value:""},
  
  {show:"	Sub-Primary Indicators Pairwise comparison (Fourth Sub-Primary Indicators Pairwise comparison)",value:""},
  
  {show:"	Secondary Indicators Pairwise comparison (Secondary Indicators Pairwise comparison)",value:""},
  
  {show:"	Sub-Secondary Indicators Pairwise comparison (First Sub-Secondary Indicators Pairwise comparison)",value:""},
  
  {show:"	Sub-Secondary Indicators Pairwise comparison (Second Sub-Secondary Indicators Pairwise comparison)",value:""},
  
  {show:"	Sub-Secondary Indicators Pairwise comparison (Third Sub-Secondary Indicators Pairwise comparison)",value:""},
  
  {show:"	Sub-Secondary Indicators Pairwise comparison (Fourth Sub-Secondary Indicators Pairwise comparison)",value:""},
  
  {show:"	Sub-Secondary Indicators Pairwise comparison (Fifth Sub-Secondary Indicators Pairwise comparison)",value:""},
  
  {show:"	Sub-Secondary Indicators Pairwise comparison (Sixth Sub-Secondary Indicators Pairwise comparison)",value:""},
  
  {show:"	Sub-Secondary Indicators Pairwise comparison (Seventh Sub-Secondary Indicators Pairwise comparison)",value:""},
  
  {show:"	Sub-Secondary Indicators Pairwise comparison (Eighth Sub-Secondary Indicators Pairwise comparison)",value:""},
  ]
  constructor() { }

  ngOnInit() {
  }

}
