import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-brother',
  templateUrl: './child-brother.component.html',
  styleUrls: ['./child-brother.component.scss']
})
export class ChildBrotherComponent implements OnInit {

  @Output() clickChange: EventEmitter<number> = new EventEmitter();
  clickedCounter = 0;

  constructor() {}

  ngOnInit(): void {}

  clickMe() {
    this.clickedCounter++;
    this.clickChange.emit(this.clickedCounter);
  }
}
