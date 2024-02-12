import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit() {

  }

  login() {
    this.router.navigate(['/home']);
  }

  value: any;
}
