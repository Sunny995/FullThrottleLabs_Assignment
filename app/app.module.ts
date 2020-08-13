import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersDashBoardComponent } from './components/users-dash-board/users-dash-board.component';
import { HttpClientModule } from '@angular/common/http';
import { UserActivityComponent } from './components/user-activity/user-activity.component';
import { UsersInformationService } from '../app/service/users-information.service';
import { HomeComponent } from './components/home/home.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatInputModule } from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersDashBoardComponent,
    UserActivityComponent,
    HomeComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,CalendarModule, BrowserAnimationsModule,MatDatepickerModule,
    MatNativeDateModule,MatInputModule,MatFormFieldModule,FormsModule
  ],
  providers: [UsersInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
