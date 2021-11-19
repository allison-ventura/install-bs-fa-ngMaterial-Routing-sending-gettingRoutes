import { Component, OnInit } from '@angular/core';
import { faAd, faCircle, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})


export class AlertComponent implements OnInit {


  public isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

  faCoffee = faCoffee
  ad= faAd
  circle = faCircle

}
