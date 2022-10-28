import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-toggle',
  templateUrl: './header-toggle.component.html',
  styleUrls: ['./header-toggle.component.scss']
})
export class HeaderToggleComponent implements OnInit {

  public isList: boolean = false;

  constructor(private readonly router: Router)
  { }

  public ngOnInit(): void
  {
    this.isList = location.pathname === '/users-list';
  }

  public onToggle(value: boolean): void
  {
    if(value === this.isList) return;
    this.isList = !this.isList;
    this.router.navigateByUrl(value ? '/users-list' : '' );
  }

}
