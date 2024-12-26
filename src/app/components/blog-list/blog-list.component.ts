import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { Blog } from "../../interfaces/blog.interface";

@Component({
  selector: "app-blog-list",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./blog-list.component.html",
})
export class BlogListComponent {
  codeExampes = "bla bla bla";
  blogs: Blog[] = [
    {
      id: "1",
      title: "Understanding TypeScript Generics",
      description:
        "A deep dive into TypeScript generics and their practical applications",
      content: "Full content here...",
      date: "2024-03-15",
      tags: ["TypeScript", "Programming", "Web Development"],
      readTime: "5 min read",
    },
    {
      id: "2",
      title: "Microservices with Node.js",
      description: "Building scalable microservices architecture using Node.js",
      content: "Full content here...",
      date: "2024-03-10",
      tags: ["Microservices", "Node.js", "Backend"],
      readTime: "8 min read",
    },
    // Add more blog posts as needed
  ];
}
