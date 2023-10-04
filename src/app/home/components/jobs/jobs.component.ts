import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobVM } from 'src/app/shared/models/jobVM';
import { JobService } from 'src/app/core/services/job.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {
  active = 1
  jobsData : JobVM[] = [];

  constructor(private jobService:JobService) {
    jobService.getAllJobsData().subscribe((contents: JobVM[]) => {

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
