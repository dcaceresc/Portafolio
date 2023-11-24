import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService } from '../../../core/services/job.service';
import { Job } from '../../../core/models/job.model';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {
  active = 1
  jobsData : Job[] = [];

  constructor(private jobService:JobService) {
    jobService.getAllJobsData().subscribe((contents: Job[]) => {

      this.jobsData = contents;
    });
  }

  activeTabId = 0;
  tabFocus = null;
  tabs = [];
  prefersReducedMotion = false;



  focusTab() {
    // Implement your logic for focusing tabs here
  }

  onKeyDown(event: KeyboardEvent) {
    // Implement your onKeyDown logic here
  }

  setActiveTabId(index: number) {
    this.activeTabId = index;
  }
}
