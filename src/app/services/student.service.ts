import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class StudentService {
  token : string ="Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTUwNzUzMTQ1NX0.exITGgmTfHrav4f4Ws77CqilZHEe7u80GQoXdDeJIgGh7jbw450yZYcTQn_Mxwcw902ul7Ora93MWnmxl9fWEg";
  baseUrl : string ="http://localhost:8081/api/v1/";
  requestOptions :any;
  constructor(public http:Http) {


   }
   

   public getAllStudent(){

      let header = new Headers({
        'Content-Type': 'application/json',
        'Accept' :'application/json',
        'Authorization' : this.token
      });
      console.log(header);
      this.requestOptions= new RequestOptions({ headers: header }); 

      //Using This Method if using tokens
      //return this.http.get(this.baseUrl+"students",this.requestOptions).map(res=>res.json());
      return this.http.get(this.baseUrl+"students").map(res=>res.json());
   }

   public saveStudent(student){
     console.log(JSON.stringify(student));
     let header = new Headers({
        'Content-Type': 'application/json',
      });
    this.requestOptions= new RequestOptions({ headers: header }); 
    
     return this.http.post(this.baseUrl+"students",JSON.stringify(student),this.requestOptions)
     .map((res:Response)=>res.json())
     .subscribe(
       data=>{
         data;
       },
       err=>{
         console.log(err);
       }
     )
   }
}

