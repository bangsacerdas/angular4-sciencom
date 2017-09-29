
import { StudentService } from './../../services/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student :studentModel[]
  constructor(private studentService:StudentService) { }

  ngOnInit() {
  }
  getAllStudent(){
      this.studentService.getAllStudent().subscribe(x=>{
          console.log(x.content);
          this.student=x.content;
        
        });
  }

  saveStudent(){
    let studentSave={
      name : "Andre01",
      email :"andrea01@gmail.com",
      birthDate:"1998-01-01"
    }
    this.studentService.saveStudent(studentSave);
  }
}


interface studentModel{
  id :string,
  name:string,
  email:string,
  birthDate:string
}