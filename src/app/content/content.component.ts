import { Component } from '@angular/core';
import { CarouselComponent } from '../common/components/carousel/carousel.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  cardsContent = [
    {
      name: "",
      src: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=1380&t=st=1718546990~exp=1718547590~hmac=1cae21d4cda4fc85f90340b132e036b5f4a9c06a0000ee7fca16dfecace8e95d"
    },
    {
      name: "",
      src: "https://img.freepik.com/premium-photo/red-cell-phone-with-word-lg-screen_1020495-313224.jpg?w=1480"
    },
    {
      name: "",
      src: "https://img.freepik.com/premium-photo/avalanche-cryptocurrency-consensus-protocol-mobile-layout-wi-creative-idea-app-background-designs_1020495-314552.jpg?w=1380"
    }
  ];
}
