import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { Blog } from "../../interfaces/blog.interface";
import { BlogService } from "../../services/blog.service";
import { map } from "rxjs";

@Component({
  selector: "app-blog-list",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./blog-list.component.html",
})
export class BlogListComponent implements OnInit {
  codeExampes = "bla bla bla";
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService
      .getBlogs()
      .pipe(map((x) => x.sort((a, b) => parseInt(b.id) - parseInt(a.id))))
      .subscribe((blogs) => {
        this.blogs = blogs;
      });
  }
}
