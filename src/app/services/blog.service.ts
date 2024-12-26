import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Blog } from "../interfaces/blog.interface";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http
      .get<{ blogs: Blog[] }>("assets/data/blog.json")
      .pipe(map((response) => response.blogs));
  }

  getBlogById(id: string): Observable<Blog | undefined> {
    return this.getBlogs().pipe(
      map((blogs) => blogs.find((blog) => blog.id === id))
    );
  }
}
