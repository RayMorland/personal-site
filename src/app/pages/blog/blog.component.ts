import { Component, OnInit } from '@angular/core';
import { rmAnimations } from 'src/app/shared/animations/rm-animations';
import { BlogpostService } from 'src/app/shared/services/blogpost.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass'],
  animations: [rmAnimations],
})
export class BlogComponent implements OnInit {
  blogposts: any = [];

  constructor(private blogpostService: BlogpostService) {}

  ngOnInit(): void {
    this.blogpostService.GetBlogposts().subscribe((res) => {
      this.blogposts = res;
    });
  }
}
