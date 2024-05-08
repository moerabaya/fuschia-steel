import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Selected, SelectedService } from '../services/selected.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-header.component.html',
  styleUrl: './post-header.component.scss',
})
export class PostHeaderComponent implements OnDestroy {
  selectedSubscription: Subscription | undefined;
  selected: Selected | undefined;

  constructor(private selectedService: SelectedService) {
    this.selectedService.selected$.subscribe(selectedItem => {
      this.selected = selectedItem;
    });
  }

  ngOnDestroy() {
    if (this.selectedSubscription) {
      this.selectedSubscription.unsubscribe();
    }
  }
}
