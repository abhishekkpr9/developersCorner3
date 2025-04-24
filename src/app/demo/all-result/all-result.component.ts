// angular import
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-all-result',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './all-result.component.html',
  styleUrls: ['./all-result.component.scss']
})
export class AllResultComponent implements OnInit {

  // To Take Examination
  // life cycle event
  ngOnInit() {
    console.log("");
  }

 
}
