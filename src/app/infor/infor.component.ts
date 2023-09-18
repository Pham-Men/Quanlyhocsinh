import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.scss']
})
export class InforComponent implements OnInit {

  public datas: any = [];

  // public ar = [ 
  //   {
  //     "id": 1,
  //     "name": "Pham Thi Men",
  //     "birtday": "01/01/1993",
  //     "number": 9 
  //   },
  //   {
  //     "id": 2,
  //     "name": "Pham Thi Men",
  //     "birtday": "01/01/1993",
  //     "number": 9 
  //   },
  //   {
  //     "id": 3,
  //     "name": "Pham Thi Men",
  //     "birtday": "01/01/1993",
  //     "number": 9 
  //   },
  //   {
  //     "id": 4,
  //     "name": "Pham Thi Men",
  //     "birtday": "01/01/1993",
  //     "number": 9 
  //   }
  // ]

  constructor(
    private httpService: HttpServiceService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.httpService.getProfile().subscribe((data) => {
      this.datas = data;
      console.log(this.datas);
    })
  }

  addStudent() {
    this.router.navigate(['addStudent'])
  }

}
