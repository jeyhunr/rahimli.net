import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-imprint",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./imprint.component.html",
})
export class ImprintComponent {
  codeExample = `
  // External Services Configuration
  const config = {
    fonts: {
      provider: 'Google Fonts',
      url: 'fonts.googleapis.com',
      fonts: ['JetBrains Mono']
    },
    hosting: {
      provider: 'Firebase',
      region: 'berlin eu'
    }
  };`;
}
