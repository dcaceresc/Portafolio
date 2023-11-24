import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { marked } from 'marked';
import frontMatter from 'front-matter';
import { Job } from '../models/job.model';
import { companyNames } from '../../../assets/content/jobs/config';


@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private httpClient: HttpClient) {}

  getAllJobsData(): Observable<Job[]> {
    const companyFiles = companyNames.map((company) =>
      this.httpClient.get(`assets/content/jobs/${company.name}/index.md`, { responseType: 'text' })
    );

    return forkJoin(companyFiles).pipe(
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
