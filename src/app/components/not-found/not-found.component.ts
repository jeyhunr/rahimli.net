import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-not-found",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./not-found.component.html",
})
export class NotFoundComponent {
  codeExample = `
  // 404 Error Handler
  app.use((req, res, next) => {
    res.status(404).json({
      error: "Not Found",
      message: "The requested resource was not found",
      path: req.path,
      timestamp: new Date().toISOString()
    });
  });`;
}
