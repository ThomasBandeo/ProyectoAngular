import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators, } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})


export class SignUpComponent {

  constructor(private router: Router) {}


  formSignUp = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email ]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', []),
  }, [this.isMismatch]);


  private isMismatch(control: AbstractControl): ValidationErrors | null {
    // si no coinciden, devuelvo el objeto ValidationErrors
    if (control.get('password')?.value !== control.get('confirmPassword')?.value) {
      return  { passwordMismatch: true };
    }

    return null
  };

  setDefaultValues() {
    this.formSignUp.setValue({
      username: 'usuarioDemo',
      email: 'demo@email.com',
      password: '123456',
      confirmPassword: '123456'
    });
  }


  onSubmit() {
    if (this.formSignUp.valid) {
      console.log(this.formSignUp.value); // Opcional: podés guardar o enviar los datos
      this.router.navigate(['/']); // Redirecciona al home
    }
  }


}
