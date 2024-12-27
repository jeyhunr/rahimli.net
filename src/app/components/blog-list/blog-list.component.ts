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
  codeExampes = `func (app *application) run(mux *chi.Mux) error {

	srv := &http.Server{
		Addr:         app.config.addr,
		Handler:      mux,
		WriteTimeout: time.Second * 30,
		ReadTimeout:  time.Second * 10,
		IdleTimeout:  time.Minute,
	}

	log.Printf("Starting server on %s...\n", app.config.addr)

	return srv.ListenAndServe()
}`;
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
