import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  addStudent = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    birtday: new FormControl(''),
    number: new FormControl('', [Validators.required]),
  });

  // public oj = {
  //   id: 5,
  //   name: 'Men',
  //   birtday: '01/02/1993',
  //   number: 9
  // }

  constructor(
    private httpService: HttpServiceService
  ) {}

  ngOnInit(): void {
  }

  public onSubmit() {
    if (!this.addStudent.valid) return;
    // console.log(this.addStudent)
    // console.log(this.addStudent.value)
    // return;
    // const newStudent = {};
    // for (const controlName  in this.addStudent.controls) {
    // if(controlName) {
    // console.log(controlName + '=' + this.addStudent.controls[controlName].value);

    this.httpService.addProfile(this.addStudent.value).subscribe((data) => {
      console.log(data);
    })
  }
}
