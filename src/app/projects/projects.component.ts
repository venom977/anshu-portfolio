import { Component } from '@angular/core';
import { ProjectsSummaryComponent } from '../projects-summary/projects-summary.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectsSummaryComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
