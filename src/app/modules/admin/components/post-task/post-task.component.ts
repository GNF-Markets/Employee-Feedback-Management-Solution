import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-post-task',
  imports: [],
  templateUrl: './post-task.component.html',
  styleUrl: './post-task.component.css'
})
export class PostTaskComponent {

  constructor(private adminService: AdminService) { 
    this.getUsers();
  } // Constructor is empty, but you can add any initialization logic here if needed.
  getUsers(){
    this.adminService.getUsers().subscribe((response) => {
      console.log(response);
    })
  
  }
}


