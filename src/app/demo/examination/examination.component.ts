// angular import
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-examination',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.scss']
})
export class ExaminationComponent implements OnInit {

  // For Schedule Examination
  // life cycle event
  ngOnInit() {
    console.log("");
  }

 
}
