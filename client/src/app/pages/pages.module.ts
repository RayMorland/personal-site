import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';
import { PageRoutingModule } from './page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HomeComponent,
    BlogComponent,
    ContactComponent,
    BlogPostComponent,
    PortfolioComponent,
    PortfolioProjectComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageRoutingModule
  ]
})
export class PagesModule { }
