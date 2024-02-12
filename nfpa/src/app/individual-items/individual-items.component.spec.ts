import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualItemsComponent } from './individual-items.component';

describe('IndividualItemsComponent', () => {
  let component: IndividualItemsComponent;
  let fixture: ComponentFixture<IndividualItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
