import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLoadPageComponent } from './event-load-page.component';

describe('EventLoadPageComponent', () => {
  let component: EventLoadPageComponent;
  let fixture: ComponentFixture<EventLoadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventLoadPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventLoadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
