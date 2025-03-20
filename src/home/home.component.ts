import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="container">
      <h1>Willkommen zur Angular 19 Demo</h1>
      <nav>
        <a routerLink="/about" class="nav-link">Über uns</a>
      </nav>
      <section>
        <p>Dies ist die Startseite Ihrer Anwendung</p>
      </section>
    </main>
  `,
  styles: [`
    .container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .nav-link {
      color: #1976d2;
      margin-right: 1rem;
    }
  `]
})
export class HomeComponent {}