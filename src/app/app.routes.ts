import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { BlogListComponent } from "./components/blog-list/blog-list.component";
import { BlogDetailComponent } from "./components/blog-detail/blog-detail.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ImprintComponent } from "./components/imprint/imprint.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "blog", component: BlogListComponent },
  { path: "blog/:id", component: BlogDetailComponent },
  { path: "imprint", component: ImprintComponent },
  { path: "**", component: NotFoundComponent },
];
