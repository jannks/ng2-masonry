import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2MasonryComponent } from './ng2-masonry.component';

describe('Ng2MasonryComponent', () => {
  let component: Ng2MasonryComponent;
  let fixture: ComponentFixture<Ng2MasonryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2MasonryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ng2MasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
