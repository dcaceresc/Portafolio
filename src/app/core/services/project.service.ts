import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { projectNames } from '../../../assets/content/projects/config';
import { Observable, forkJoin, map } from 'rxjs';
import frontMatter from 'front-matter';
import { marked } from 'marked';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private http = inject(HttpClient);

  public getProjects() : Observable<Project[]> {
    const projectFiles = projectNames.map((project) =>
      this.http.get(`assets/content/projects/${project.name}/index.md`, { responseType: 'text' })
    );

    return forkJoin(projectFiles).pipe(
      map(contents => {
        return contents
          .map(content => {
            const parsedContent = frontMatter(content);
            const frontmatter = parsedContent.attributes;
            const contentHtml = marked(parsedContent.body);
            return { frontmatter, contentHtml };
          });
      })
    );
  }
}
