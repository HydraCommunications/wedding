import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryListComponent } from './registry-list.component';

describe('RegistryListComponent', () => {
  let component: RegistryListComponent;
  let fixture: ComponentFixture<RegistryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistryListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});