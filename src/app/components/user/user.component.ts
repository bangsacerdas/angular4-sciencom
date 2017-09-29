
import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  name1 ='Budi';
  name2 : string = "hosea";
  number1 : number = 1;
  object1 : any ={
                  nama:"Jupiter",
                  Alamat :"Cengkareng"
                };
  nilai : boolean=false;
  alamat = {
    kecamatan : 'Kalideres',
    kelurahan :'pegadungan',
    zip : '1123'
  }
  myArray : any = [
      {nama : "jupiter",umur : 2},
      {nama : "widy",umur : 21},
      {nama : "hosea",umur : 10},
      ];

  student =['jupiter','hosea','lona'];
  x;
  posts:Post[];
  constructor(private dataService:DataService) { 
    this.dataService.getPost().subscribe((post)=>{
        //console.log(post);
        this.posts =post;
      }); 
  }



  clickSaya(){
    console.log("Button saya klik");
    if(this.nilai)
      this.nilai=false;
    else
      this.nilai=true;
  }
  

  addStudent(x){
    
    this.student.unshift(x);
    return false;
  }
  deleteStudent(murid){
    console.log(murid);
    for (var index = 0; index < this.student.length; index++) {
      if(this.student[index]==murid){
        this.student.splice(index,1);
      }
      
    }
  }
}
interface Post{
  userId : number,
  id :number,
  title :string,
  body:string
}
