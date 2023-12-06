import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Auto-AHP',
  templateUrl: './Auto-AHP.component.html',
  styleUrls: ['./Auto-AHP.component.css']
})
export class AutoAHPComponent implements OnInit {
option=2;
constructor(private route: ActivatedRoute) {}

ngOnInit() {
  // Read the id parameter from the route
  this.route.paramMap.subscribe(params => {
     
     const idParam = params.get('id');
     this.option = idParam ? parseInt(idParam, 10) : 2;
  });

}
}