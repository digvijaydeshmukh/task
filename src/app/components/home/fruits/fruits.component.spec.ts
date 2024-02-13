import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fruitsComponent } from './fruits.component';

describe('FruitsComponent', () => {
  let component: fruitsComponent;
  let fixture: ComponentFixture<fruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [fruitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(fruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
