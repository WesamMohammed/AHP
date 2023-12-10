import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class RouteBackService {

constructor() { }
private breadcrumbsSubject = new BehaviorSubject<any[]>([]);
items = this.breadcrumbsSubject.asObservable();

setBreadcrumbs(breadcrumbs: any[]): void {
  
  
  this.breadcrumbsSubject.next(breadcrumbs);
}
}
