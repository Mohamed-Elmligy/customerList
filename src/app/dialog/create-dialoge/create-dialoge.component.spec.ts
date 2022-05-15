import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDialogeComponent } from './create-dialoge.component';

describe('CreateDialogeComponent', () => {
  let component: CreateDialogeComponent;
  let fixture: ComponentFixture<CreateDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDialogeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
