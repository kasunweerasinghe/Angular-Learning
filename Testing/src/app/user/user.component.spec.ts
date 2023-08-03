import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserComponent} from './user.component';

// describe('UserComponent', () => {
//   let component: UserComponent;
//   let fixture: ComponentFixture<UserComponent>;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [UserComponent]
//     });
//     fixture = TestBed.createComponent(UserComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('UserComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
  })

  it('should create the app', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })
});
