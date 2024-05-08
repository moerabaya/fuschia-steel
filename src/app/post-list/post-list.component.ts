import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Selected, SelectedService } from '../services/selected.service';
import { Subscription } from 'rxjs';

export interface Item {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  dataList: Item[] | undefined;
  httpClient = inject(HttpClient);
  selectedSubscription: Subscription | undefined;
  selected: Selected | undefined;

  constructor(private selectedService: SelectedService) {}

  ngOnInit() {
    this.fetchData();
    this.selectedService.selected$.subscribe(selectedItem => {
      this.selected = selectedItem;
    });
  }

  ngOnDestroy() {
    if (this.selectedSubscription) {
      this.selectedSubscription.unsubscribe();
    }
  }

  handleSelect(event: Event, item: Item) {
    event.preventDefault();
    this.selectedService.set(item);
  }

  fetchData() {
    this.httpClient
      .get<Item[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        this.dataList = data;
      });
  }

  isSelected(value: keyof Item, item: Item): boolean {
    return this.selected?.value === value && this.selected?.id === item.id;
  }
}
