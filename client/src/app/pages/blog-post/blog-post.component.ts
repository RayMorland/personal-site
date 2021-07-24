import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogpostService } from 'src/app/shared/services/blogpost.service';

interface Blogpost {
  title?: string,
  content?: string,
  subtitle?: string,
  slug: string
}

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.sass']
})
export class BlogPostComponent implements OnInit {
  blogpost: any;
  blogpostReady = false;

  constructor(private route: ActivatedRoute, private blogpostService: BlogpostService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      console.log('Url Id: ', id);
      this.blogpostService.GetBlogpost(id).subscribe(res => {
        this.blogpost = res[0];
        this.blogpostReady = true;
        console.log(this.blogpost);
      });
    });
  }

}
