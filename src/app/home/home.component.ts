import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
users:any =[];
  constructor(private crudService: CrudService) {}
  filteredOptions: Observable<string[]> = new Observable<string[]>();
  filter: any = '';
  ngOnInit(): void {
    this.crudService.getUsers().subscribe( data => this.users = data);
  }

}
