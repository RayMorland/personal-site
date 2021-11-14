import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PublicSiteComponent } from "./components/layouts/public-site/public-site.component";
import { RouterModule } from "@angular/router";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NotFoundComponent } from "./components/util/not-found/not-found.component";
import { LinkOneComponent } from "./components/link-one/link-one.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProjectLinkOneComponent } from "./components/project-link-one/project-link-one.component";
import { FormInputOneComponent } from "./components/forms/form-input-one/form-input-one.component";
import { FormOneComponent } from "./components/forms/form-one/form-one.component";
import { SecondaryProjectComponent } from "./components/secondary-project/secondary-project.component";
import { AppearDirective } from "./directives/appear.directive";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PublicSiteComponent,
    NotFoundComponent,
    LinkOneComponent,
    ProjectLinkOneComponent,
    FormInputOneComponent,
    FormOneComponent,
    SecondaryProjectComponent,
    AppearDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PublicSiteComponent,
    ProjectLinkOneComponent,
    SecondaryProjectComponent,
    LinkOneComponent,
    FormsModule,
    ReactiveFormsModule,
    AppearDirective,
  ],
})
export class SharedModule {}
