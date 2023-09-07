import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GildedRoseComponent, Item } from './gilded-rose.component';

describe('GildedRoseComponent Basics', () => {
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

  it('should render single item', () => {
    const items = [new Item("Sulfuras, Hand of Ragnaros", 10, 10)]
    component.items = items;

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('li')?.textContent).toContain('Sulfuras, Hand of Ragnaros');
  });

  it('should render multiple items', () => {
    const items = [
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Aged Brie", 100, 20),
    ]
    component.items = items;

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    let nodes = compiled.querySelectorAll("li");
    console.log(nodes);
    expect(nodes[0].textContent).toContain('Sulfuras, Hand of Ragnaros');
    expect(nodes[1].textContent).toContain('Aged Brie');
  });
});

describe('GildedRoseComponent Kata', () => {
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

  it('should update quality', () => {
    const items = [
      new Item("Generic testing item", 1, 20),
    ]
    component.items = items;
    component.updateQuality();

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    let nodes = compiled.querySelectorAll("li");
    console.log(nodes);
    expect(nodes[0].textContent).toContain('Quality: 19');
  });

});
