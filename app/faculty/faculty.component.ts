import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../student.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  stulist: any[] = [];

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    // Get the list of students from the service
    this.stulist = this.studentsService.getAllStudents();
  }
}