// angular import
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-take-examination',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './take-examination.component.html',
  styleUrls: ['./take-examination.component.scss']
})
export class TakeExaminationComponent implements OnInit {

  // To Take Examination
  // life cycle event
  ngOnInit() {
    console.log("");
  }

 
}
