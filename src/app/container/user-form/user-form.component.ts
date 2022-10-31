import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEvent, merge, Observable } from 'rxjs';
import { IDisplayErrors, IUsers } from '../../models/users.model';
import { ValidatorCpf } from '../../utils/validator-cpf';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, AfterViewInit
{
  @ViewChildren(FormControlName, { read: ElementRef})
  formElements: ElementRef[] = [];

  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cpf: new FormControl('', [Validators.required, ValidatorCpf.validatorCpf()]),
    phone: new FormControl('', [Validators.required, Validators.minLength(11)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  public displayErrors: IDisplayErrors = {};
  public loading: boolean = false;
  public baseUsers: Array<IUsers> = [];

  constructor(private readonly router: Router)
  { }

  public ngOnInit(): void
  {
    if(localStorage.getItem('users'))
    {
      this.baseUsers.push(...JSON.parse(localStorage.getItem('users') || ''));
    }
  }

  public ngAfterViewInit(): void
  {
    let controlBlurs: Observable<any>[] = this.formElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayErrors = this.checkedInputs();
    });
  }

  public handleButton()
  {
    this.loading = true;
    setTimeout(() =>
    {
      this.loading = false;
      if(this.form.invalid)
      {
        alert('Preencha o formulario corretamente!!');
        return;
      }

      if(this.baseUsers.find( value => value.cpf === this.form.value.cpf))
      {
        alert('Usuario ja cadastrado!!');
        return;
      }

      this.baseUsers.push(this.form.value);
      localStorage.setItem('users', JSON.stringify(this.baseUsers));
      this.router.navigateByUrl('/users-list')
    }, 2000);

  }

  public checkedInputs(): { [key: string]: string }
  {
    let messages = {};

    for (let controlKey in this.form.controls)
    {
      let c = this.form.controls[controlKey];
      if(c.dirty || c.touched)
      {
        switch (controlKey) {
          case 'name':
            if (c.value.length < 3 && c.invalid)
            {
              Object.assign(messages, {'name': 'Campo deve conter 3 caracteres ou mais.'});
            }
            break;
          case 'cpf':
              if(c.invalid)
              {
                Object.assign(messages, {'cpf': 'CPF invalido.'});
              }
            break;
          case 'phone':
            if(c.value.length < 11 && c.invalid)
            {
              Object.assign(messages, {'phone': 'Telefone invalido.'});
            }
            break;
          case 'email':
            if(c.invalid)
            {
              Object.assign(messages, {'email': 'Email invalido.'});
            }
            break;
          default:
            break;
        }
      }
    }
    return messages;
  }
}
