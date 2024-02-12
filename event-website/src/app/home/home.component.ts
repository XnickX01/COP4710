import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

/**
 * Represents the HomeComponent class.
 */
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

  /**
   * Handles the click event when the next month button is clicked.
   */
  onNextMonthClick() {
    this.updateMonth(1);
  }

  /**
   * Handles the click event when the previous month button is clicked.
   */
  onPreviousMonthClick() {
    this.updateMonth(-1);
  }

  /**
   * Updates the month based on the given month offset.
   * @param monthOffset - The offset to be added to the current month.
   */
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

  /**
   * Updates the calendar with the current date.
   */
  private updateCalendar() {
    const today = new Date();
    this.month = today.toLocaleString('en-US', { month: 'long' });
    this.day = today.getDate();
    this.year = today.getFullYear();
    this.firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    this.updateDaysInMonth();
  }

  /**
   * Updates the array of days in the current month.
   */
  private updateDaysInMonth() {
    if (this.firstDayOfMonth != null) {
      const lastDayOfMonth = this.year && this.month ? new Date(this.year, this.getMonthIndex(this.month) + 1, 0).getDate() : 0;
      this.daysInMonth = Array.from({ length: lastDayOfMonth }, (_, i) => i + 1);
      this.daysInlastMonth = Array.from({ length: this.firstDayOfMonth }, (_, i) => i);
    }
  }

  /**
   * Gets the index of the given month in the monthNames array.
   * @param month - The month name.
   * @returns The index of the month in the monthNames array.
   */
  private getMonthIndex(month: string): number {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames.indexOf(month);
  }
}
