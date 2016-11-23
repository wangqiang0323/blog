import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.styl']
})
export class SearchBarComponent implements OnInit {
  @Input() pagetitle: String;
  @Output() search: EventEmitter<any> = new EventEmitter();
  id: string = '';
  name: string= '';

  constructor() { }

  ngOnInit() {
  }

  onSearch(){
    this.search.emit({
      event: event,
      id: this.id,
      name: this.name
    });
  }

}
