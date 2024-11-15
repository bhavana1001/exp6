import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private stulist: any[] = [];  // Use a private array to store student data.

  constructor() { }

  // Method to add a student to the list
  addStudent(stuname: string, activity: string) {
    this.stulist.push({ name: stuname, acty: activity });
  }

  // Method to get all students
  getAllStudents() {
    return this.stulist;
  }
}