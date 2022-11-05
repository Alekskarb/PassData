import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ParentComponent } from './parent.component';
import { ChildSisterComponent } from './child-sister/child-sister.component';
import { ChildBrotherComponent } from './child-brother/child-brother.component';

@NgModule({
  declarations: [
    ParentComponent,
    ChildSisterComponent,
    ChildBrotherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }
