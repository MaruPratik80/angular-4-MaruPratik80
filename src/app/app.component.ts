import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;
  @ViewChild('sortDropdown') sortDropdown!: ElementRef;
  @ViewChild('table') table!: any;

  constructor() {}

  onInputChange() {
    const searchQuery = this.searchInput.nativeElement.value;
    const sortBy = this.sortDropdown.nativeElement.value;

    this.table.onChange(searchQuery, sortBy);
  }
}
