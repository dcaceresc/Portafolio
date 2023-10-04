import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobService } from './core/services/job.service';

export const routes: Routes = [{
  path : '',providers: [
    JobService
  ], component : HomeComponent
}];
