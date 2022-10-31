import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersListComponent } from '../users-list/users-list.component';
import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormComponent, UsersListComponent ],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes(
        [{path: 'users-list', component: UsersListComponent}]
      )]
    })
    .compileComponents();
  });

  beforeEach(() => {
    localStorage.clear();
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Verify invalid form', () => {
    component.form.setValue({
      'name': 'rr',
      'cpf': '12345678901',
      'phone': '12988885555',
      'email': 'test@email.com'
    })
    expect(component.form.valid).toEqual(false);
  });

  it('Create user', fakeAsync(() => {
    component.form.setValue({
      'name': 'test',
      'cpf': '55046735008',
      'phone': '12988885555',
      'email': 'test@email.com'
    });

    component.handleButton();
    tick(2500);

    expect(component.baseUsers.some(value => value.cpf === '55046735008')).toEqual(true);
  }));

  it('Not Duplicate user', fakeAsync(() => {

    component.form.setValue({
      'name': 'test',
      'cpf': '55046735008',
      'phone': '12988885555',
      'email': 'test@email.com'
    });

    component.handleButton();
    tick(2500);

    spyOn(window, "alert");
    component.form.setValue({
      'name': 'test',
      'cpf': '55046735008',
      'phone': '12988885555',
      'email': 'test@email.com'
    });

    component.handleButton();
    tick(2500);

    expect(window.alert).toHaveBeenCalledWith("Usuario ja cadastrado!!")
  }));

});
