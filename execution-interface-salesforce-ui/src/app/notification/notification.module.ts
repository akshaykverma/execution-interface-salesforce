import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupNotifierComponent } from './group-notifier.component';
import { IndividualNotifierComponent } from './individual-notifier.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GroupNotifierComponent, IndividualNotifierComponent]
})
export class NotificationModule { }
