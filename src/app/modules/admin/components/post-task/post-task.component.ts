import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepicker, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatOption } from '@angular/material/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-post-task',
  imports: [
    CommonModule,
   MatFormField,
    FormsModule,
    ReactiveFormsModule,
    MatLabel,
    MatError, 
    MatDatepicker,
    MatDatepickerToggle,
  MatDatepickerModule ,
  MatOption
    
  ],
  templateUrl: './post-task.component.html',
  styleUrl: './post-task.component.css'
})
export class PostTaskComponent {

  taskForm! : FormGroup;
  listofEmployees : any[] = [];
  listofPriorities : any[] = ["LOW", "MEDIUM", "HIGH"];
  
  constructor(private adminService: AdminService, private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,  
  ) { 
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

  postTask(){
    console.log(this.taskForm.value);
    this.adminService.postTask(this.taskForm.value).subscribe((response) => {
     if(response.id != null){
       this.snackBar.open("Task posted successfully", "OK", {
         duration: 5000})
         this.router.navigate(['/admin/dashboard']);
     }else{
       this.snackBar.open("Something went wrong", "Error", {
         duration: 5000})
     }

    })
    
  }
}


