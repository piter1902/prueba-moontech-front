import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConnectionsComponent } from './list-connections.component';

describe('ListConnectionsComponent', () => {
  let component: ListConnectionsComponent;
  let fixture: ComponentFixture<ListConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListConnectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
