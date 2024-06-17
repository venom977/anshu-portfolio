import { Component, NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './common/components/carousel/carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ContentComponent, CarouselComponent],
  template: `
  <div [attr.data-bs-theme] = "theme">
    <app-header/>
    <app-content/>
    <app-footer/>
  </div>
  
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  theme: string = "dark";

  toggleTheme() {
    this.theme = this.theme === "dark" ? "light" : "dark";
  }
}
