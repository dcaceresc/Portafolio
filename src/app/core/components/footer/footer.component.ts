import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
}
