import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../post-list/post-list.component';

export interface Selected extends Item {
  value?: keyof Item;
}

@Injectable({
  providedIn: 'root',
})

// Used observable with the service acting as one source of truth our select post
export class SelectedService {
  selected$ = new BehaviorSubject<Selected | undefined>(undefined);

  get(): Selected | undefined {
    return this.selected$.getValue();
  }

  set(item: Item) {
    if (!this.selected$.value || this.selected$.value.id !== item.id) {
      this.selected$.next({ ...item, value: 'userId' });
    } else {
      const currentKeyIndex = Object.keys(item).indexOf(
        this.selected$.value.value as string
      );
      const nextKey = this.nextKey(item, currentKeyIndex);
      this.selected$.next({ ...item, value: nextKey });
    }
  }

  private nextKey(obj: Item, currentIndex: number): keyof Item {
    const keys = Object.keys(obj);
    return keys[(currentIndex + 1) % keys.length] as keyof Item;
  }
}
