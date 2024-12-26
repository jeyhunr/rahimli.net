import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="min-h-screen bg-gray-900 font-mono">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = "personal-blog";
}
