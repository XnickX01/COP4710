import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { ToolbarModule } from 'primeng/toolbar';
import { EventLoadPageComponent } from './event-load-page/event-load-page.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RegisterComponent, ToolbarModule, EventLoadPageComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  showInitialContent: boolean = true;

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.showInitialContent = false;
    // }, 3000);
  }
  title = 'event-website';
}
