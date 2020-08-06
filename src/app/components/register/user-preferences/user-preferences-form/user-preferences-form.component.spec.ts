import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPreferencesFormComponent } from './user-preferences-form.component';

describe('UserPreferencesFormComponent', () => {
  let component: UserPreferencesFormComponent;
  let fixture: ComponentFixture<UserPreferencesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPreferencesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPreferencesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
