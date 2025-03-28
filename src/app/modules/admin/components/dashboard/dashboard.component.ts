import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-dashboard',
  imports: [    CommonModule,
    MatCardModule,
    MatDividerModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  listOfTasks: any = [];

  constructor(private service: AdminService) {
    this.getTasks();
   }

   getTasks() {
    this.service.getAllTasks().subscribe((res) => {
      this.listOfTasks = res;
    }
    )
   }
}

