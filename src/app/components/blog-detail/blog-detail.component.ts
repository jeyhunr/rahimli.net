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
  codeExampes = `func (app *application) mount() *chi.Mux {
	r := chi.NewRouter()

	r.Use(middleware.Logger)
	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	// Set a timeout value on the request context (ctx), that will signal
	// through ctx.Done() that the request has timed out and further
	// processing should be stopped.
	r.Use(middleware.Timeout(60 * time.Second))

	r.Route("/v1", func(r chi.Router) {
		r.Get("/health", app.healthCheckHandler)
	})

	return r
}
`;
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
