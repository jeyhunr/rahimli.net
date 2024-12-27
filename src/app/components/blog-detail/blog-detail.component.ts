import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { Blog } from "../../interfaces/blog.interface";
import { BlogService } from "../../services/blog.service";

@Component({
  selector: "app-blog-detail",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./blog-detail.component.html",
})
export class BlogDetailComponent implements OnInit {
  codeExampes = "bla bla bla";
  blog?: Blog;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.blogService.getBlogById(id).subscribe((blog) => {
        this.blog = blog;
      });
    }
  }
}
