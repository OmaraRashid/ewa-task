import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponentComponent', () => {
  let component: SignUpComponent;
  let fixture;

  beforeEach(async () => {
    

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load users on init', () => {
    expect(component.users).toBeDefined();
  });


});
