import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ExpComponent } from './exp/exp.component'; // Assuming this component exists
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    FacultyComponent,
    ExpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Ensure FormsModule is imported
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }