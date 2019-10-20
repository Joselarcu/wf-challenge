import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {


  @Input()
  elements: {label: string, view: string}[]; //this should be extracted to a class

  @Input()
  logoUrl: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(url: string): void {
    this.router.navigate([url]);
  }

}
