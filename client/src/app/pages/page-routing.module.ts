import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicSiteComponent } from '../shared/components/layouts/public-site/public-site.component';
import { NotFoundComponent } from '../shared/components/util/not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: PublicSiteComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'words',
        component: BlogComponent,
      },
      {
        path: 'words/:id',
        component: BlogPostComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'work',
        component: PortfolioComponent,
      },
      {
        path: 'work/:id',
        component: PortfolioProjectComponent,
      },
      { path: 'contact', component: ContactComponent },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
