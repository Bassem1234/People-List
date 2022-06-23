import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
addForm:any;
Users:any;
  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.crudService.getUsers().subscribe(data => this.Users = data);
    this.addForm = new FormGroup({
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      street: new FormControl(''),
      suite: new FormControl(''),
      city:new FormControl(''),
      zipcode: new FormControl(''),
      lat: new FormControl(''),
      lng: new FormControl(''),
      phone: new FormControl(''),
      website: new FormControl(''),
      cName: new FormControl(''),
      catchPhrase: new FormControl(''),
      bs: new FormControl('')
    })
  }

  // Save new User
  saveUser(){
    this.crudService.addUser({
      id: this.Users.length,
      name: this.addForm.value.name,
      username: this.addForm.value.username,
      email: this.addForm.value.email,
      adress: {
        street: this.addForm.value.street,
        suite: this.addForm.value.suite,
        city: this.addForm.value.city,
        zipcode: this.addForm.value.zipcode,
        lat: this.addForm.value.lat,
        lng: this.addForm.value.lng,
        phone: this.addForm.value.phone,
        website: this.addForm.value.website,
        company: {
          name: this.addForm.value.cName,
          catchPhrase: this.addForm.value.catchPhrase,
          bs: this.addForm.value.bs
        }
      }
    });
    setTimeout(()=>{
      this.router.navigate(['']);
    },1500);
  }

}
