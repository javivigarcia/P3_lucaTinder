import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user-card-deploy',
  templateUrl: './user-card-deploy.component.html',
  styleUrls: ['./user-card-deploy.component.scss']
})
export class UserCardDeployComponent implements OnInit {
  @Input() usuario:any;

  constructor() { }

  ngOnInit(): void {
  
  }



}
