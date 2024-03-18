import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../core/models/project.model';
import { ProjectService } from '../../../core/services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{

  private projectService = inject(ProjectService);

  public projects : Project[] = [];


  public ngOnInit() {
    this.projectService.getProjects().subscribe((contents: Project[]) => {
      this.projects = contents;
    });
  }

}
