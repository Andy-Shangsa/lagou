import { Component } from '@angular/core';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  animations: [
    flyIn
  ]
})

export class CompanyComponent {
  
}
