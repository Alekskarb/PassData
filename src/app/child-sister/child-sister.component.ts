import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-sister',
  templateUrl: './child-sister.component.html',
  styleUrls: ['./child-sister.component.scss']
})
export class ChildSisterComponent implements OnInit {
// @Input() showCounter = 0;
@Input() showClickedCounter = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
