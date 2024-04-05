import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      instl_id_ks: ['', Validators.required],
      corp_id: { value: '', disabled: true },
      client_code: { value: '', disabled: true },
      terminal_id: ['', Validators.required],
      host_name: ['', Validators.required],
      dflt_access_method: ['USERID', Validators.required]
    });
  }

  onSubmit(): void {
    this.router.navigate(['/']);
    if (this.registerForm.valid) {
      console.log('Form submitted successfully.');
      // You can add your form submission logic here
    } else {
      console.log('Form is invalid. Please fill all required fields.');
    }
  }

  onLogin(){
    this.router.navigate(['/']);
  }

}
