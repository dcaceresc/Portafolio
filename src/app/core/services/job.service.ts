import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { companyNames } from 'src/assets/content/jobs/config';
import { Observable, forkJoin, map } from 'rxjs';
import { JobVM } from 'src/app/shared/models/jobVM';
import { marked } from 'marked';
import frontMatter from 'front-matter';


@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private httpClient: HttpClient) {}

  getAllJobsData(): Observable<JobVM[]> {
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
