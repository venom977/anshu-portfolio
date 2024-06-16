import { Component } from '@angular/core';
import { ToggleBtnComponent } from '../common/components/toggle-btn.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToggleBtnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent { }
