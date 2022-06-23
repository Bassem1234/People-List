import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
user:any;
  constructor(private crudService: CrudService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe((params: any) => {
      this.crudService.getUser(params.id).subscribe(data => this.user = data);
    })
   
  }

}
