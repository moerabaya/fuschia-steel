import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostHeaderComponent } from './post-header/post-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, PostListComponent, PostHeaderComponent],
})
export class AppComponent {
  title = 'fuschia-steel';
}
