import { Component, Input, OnInit } from '@angular/core';
import { APICallService } from '../api-call.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  // @Input() searchQuery!: string;
  // @Input() sortBy!: string;

  results!: any;
  users!: any;

  constructor(private apiCallService: APICallService) {}

  ngOnInit() {
    this.init();
  }
  async init() {
    this.results = await this.apiCallService.getJSON();
    this.users = this.results.slice();
  }

  onChange(searchQuery: string, sortBy: string) {
    this.users = this.results
      .filter((user: any) => Object.values(user).join(' ').toLowerCase().includes(searchQuery.toLowerCase()))
      .sort((a: any, b: any) => (a[sortBy] > b[sortBy] ? 1 : -1));
  }
}
