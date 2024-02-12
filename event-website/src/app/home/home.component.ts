import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  month: string | undefined;
  day: number | undefined;
  year: number | undefined;

  daysInMonth: number[] | undefined;
  daysInlastMonth: number[] | undefined;
  firstDayOfMonth: number | undefined;

  constructor() {
    this.updateCalendar();
  }

  onNextMonthClick() {
    this.updateMonth(1);
  }

  onPreviousMonthClick() {
    this.updateMonth(-1);
  }

  private updateMonth(monthOffset: number) {
    if (this.year && this.month && this.day) {
      const currentDate = new Date(this.year, this.getMonthIndex(this.month), this.day);
      const newMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + monthOffset, 1);
      this.month = newMonthDate.toLocaleString('en-US', { month: 'long' });
      this.year = newMonthDate.getFullYear();
      this.firstDayOfMonth = newMonthDate.getDay();
      this.updateDaysInMonth();
    }
  }

  private updateCalendar() {
    const today = new Date();
    this.month = today.toLocaleString('en-US', { month: 'long' });
    this.day = today.getDate();
    this.year = today.getFullYear();
    this.firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    this.updateDaysInMonth();
  }

  private updateDaysInMonth() {
    if (this.firstDayOfMonth != null) {
      const lastDayOfMonth = this.year && this.month ? new Date(this.year, this.getMonthIndex(this.month) + 1, 0).getDate() : 0;
      this.daysInMonth = Array.from({ length: lastDayOfMonth }, (_, i) => i + 1);
      this.daysInlastMonth = Array.from({ length: this.firstDayOfMonth }, (_, i) => i);
    }
  }

  private getMonthIndex(month: string): number {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames.indexOf(month);
  }
}
