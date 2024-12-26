import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { BlogListComponent } from "./components/blog-list/blog-list.component";
import { BlogDetailComponent } from "./components/blog-detail/blog-detail.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "blog", component: BlogListComponent },
  { path: "blog/:id", component: BlogDetailComponent },
];
