import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  // in child-sister component = counter clicks
  count = 0;

  // in child-brother component = event by click
  onChildBrotherClicked(count: any) {
    this.count = count;
  }
}
