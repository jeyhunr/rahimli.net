import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Blog } from "../../interfaces/blog.interface";

@Component({
  selector: "app-blog-detail",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./blog-detail.component.html",
})
export class BlogDetailComponent implements OnInit {
  codeExampes = "bla bla bla";

  blog?: Blog;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    // In a real app, you would fetch the blog post from a service
    this.blog = {
      id: "1",
      title: "Understanding TypeScript Generics",
      description:
        "A deep dive into TypeScript generics and their practical applications",
      content: `# Understanding TypeScript Generics

TypeScript generics are a powerful feature that allows you to write flexible, reusable code while maintaining type safety...

## What are Generics?

Generics allow you to write code that can work with multiple types while retaining type information...

## Common Use Cases

1. Generic Functions
2. Generic Interfaces
3. Generic Classes

## Examples

\`\`\`typescript
function identity<T>(arg: T): T {
    return arg;
}

// Usage
let output = identity<string>("myString");
\`\`\`
      `,
      date: "2024-03-15",
      tags: ["TypeScript", "Programming", "Web Development"],
      readTime: "5 min read",
    };
  }
}
