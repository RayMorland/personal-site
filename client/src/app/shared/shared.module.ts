import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PublicSiteComponent } from './components/layouts/public-site/public-site.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/util/not-found/not-found.component';
import { LinkOneComponent } from './components/link-one/link-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PublicSiteComponent,
    NotFoundComponent,
    LinkOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PublicSiteComponent,
    LinkOneComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
