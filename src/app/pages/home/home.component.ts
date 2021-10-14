import { Component, OnInit } from '@angular/core';
import { rmAnimations } from 'src/app/shared/animations/rm-animations';
import { BlogpostService } from 'src/app/shared/services/blogpost.service';
import { ProjectService } from 'src/app/shared/services/project.service';

interface Blogpost {
  title: string,
  content: string,
  subtitle: string,
  slug: string
}

interface Project {
  title: string,
  services: string,
  slug: string,
  description: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [rmAnimations],
})
export class HomeComponent implements OnInit {
  public blogposts: Blogpost[] = [];
  public projects: Project[] = [];

  constructor(
    private blogpostService: BlogpostService,
    private projectsService: ProjectService
  ) {}

  ngOnInit(): void {
    this.blogpostService
      .GetBlogposts()
      .subscribe((res) => {
        console.log(res);
        this.blogposts = res
      });
    this.projectsService
      .GetProjects()
      .subscribe((res) => {
        console.log(res);
        this.projects = res;
      });
  }
}
