import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  constructor(private studentService: StudentsService) {}

  ngOnInit(): void {}

  // This method is triggered when the "Add Student" button is clicked
  addStudent(stuname: string, activity: string) {
    this.studentService.addStudent(stuname, activity);
    alert("Student added successfully!");
  }
}