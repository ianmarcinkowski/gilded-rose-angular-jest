import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GildedRoseComponent, Item } from './gilded-rose.component';

describe('GildedRoseComponent', () => {
  let component: GildedRoseComponent;
  let fixture: ComponentFixture<GildedRoseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GildedRoseComponent]
    });
    fixture = TestBed.createComponent(GildedRoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render body text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('gilded-rose works!');
  });

  it('should render quality', () => {
    const items = [new Item("Sulfuras, Hand of Ragnaros", 10, 10)]
    component.items = items;

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('li')?.textContent).toContain('Sulfuras, Hand of Ragnaros');
  });
});
