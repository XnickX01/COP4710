import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SidebarModule } from 'primeng/sidebar';
import { OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ToolbarModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    InputTextModule,
    SidebarModule,
    RouterModule,
    CommonModule

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [],
 
})
export class HeaderComponent implements OnInit {
  sidebarVisible: boolean = false;

  constructor() {
  }

  ngOnInit() {
    // Initialization code here
  }

  onSidebarToggle() {
    console.log('onSidebarToggle');
    this.sidebarVisible = !this.sidebarVisible;
  }
}
