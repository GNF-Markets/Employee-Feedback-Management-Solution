import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-post-task',
  imports: [
   MatFormField,
    FormsModule,
    ReactiveFormsModule,
    MatLabel,
    MatError
    
  ],
  templateUrl: './post-task.component.html',
  styleUrl: './post-task.component.css'
})
export class PostTaskComponent {

  taskForm! : FormGroup;
  listofEmployees : any[] = [];
  listofPriorities : any[] = ["LOW", "MEDIUM", "HIGH"];
  
  constructor(private adminService: AdminService, private fb: FormBuilder) { 
    this.getUsers();
    this.taskForm = this.fb.group({
    employeeId:[null, [Validators.required]],
    title:[null, [Validators.required]],
    description:[null, [Validators.required]],
    dueData: [null, [Validators.required]],
    priority: [null, [Validators.required]],
    })
  } // Constructor is empty, but you can add any initialization logic here if needed.
  getUsers(){
    this.adminService.getUsers().subscribe((response) => {
      console.log(response);
    })
  
  }
}


