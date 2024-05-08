import { SelectedService } from './selected.service';

describe('SelectedService', () => {
  let service: SelectedService;

  beforeEach(() => {
    service = new SelectedService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get the selected item', () => {
    const item = {
      userId: 2,
      id: 1,
      title: 'Title 1',
      body: 'Body 1',
    };

    service.set(item);
    expect(service.get()?.id).toEqual(item.id);
  });

  it('should rotate through keys when setting the same item', () => {
    const item = {
      userId: 2,
      id: 1,
      title: 'Title 1',
      body: 'Body 1',
    };

    service.set(item);
    expect(service.get()?.value).toBe('userId');

    service.set(item);
    expect(service.get()?.value).toBe('id');

    service.set(item);
    expect(service.get()?.value).toBe('title');

    service.set(item);
    expect(service.get()?.value).toBe('body');
  });
});
