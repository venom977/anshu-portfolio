import { Component, NgModule, OnInit, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { CarouselComponent } from './common/components/carousel/carousel.component';
import { StateService } from './common/service/state.servce';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ContentComponent, CarouselComponent, NgClass, RouterOutlet],
  template: `

  <div [ngClass]="_theme.themeSignal()">
    <app-header/>
     <router-outlet/>
    <app-footer/>
  </div>
  
  `,
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

  _theme: StateService = inject(StateService);

  ngOnInit(): void { };

}
