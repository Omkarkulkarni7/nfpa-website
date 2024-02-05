import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSystemsComponent } from './total-systems.component';

describe('TotalSystemsComponent', () => {
  let component: TotalSystemsComponent;
  let fixture: ComponentFixture<TotalSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalSystemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
