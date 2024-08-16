import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LosingTabComponent } from './losing-tab.component';

describe('LosingTabComponent', () => {
  let component: LosingTabComponent;
  let fixture: ComponentFixture<LosingTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LosingTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LosingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
