import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class appComponent implements OnInit {
 
  submitForm: FormGroup;
 
  constructor(private sf :FormBuilder) {
    this.submitForm = this.sf.group({
      'Name':[''],
      'Place':[''],
      'Designation':[''],
      'Experience':['']
    })
   }
    data:{Name:string, Place: string, Designation: string, Experience: string}[]= [];
   onSubmit(){
    const { Name, Place, Designation, Experience } = this.submitForm.value;
    if (Name && Place && Designation && Experience !== null) {
      this.data.push({
        Name,
        Place,
        Designation,
        Experience
      });
      this.submitForm.reset();
    } else {
    }
  }
  edit(data:any){
   this.submitForm.patchValue({
    Name : data.Name,
    Place: data.Place,
    Designation: data.Designation,
    Experience: data.Experience
   })
  }
  del(data:any){
    this.submitForm.patchValue({
      Name : '',
      Place: '',
      Designation:'' , 
      Experience:  ''
     })
  }
  ngOnInit(): void {
  }
}
