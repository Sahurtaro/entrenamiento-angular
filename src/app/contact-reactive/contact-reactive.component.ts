import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss'],
})
export class ContactReactiveComponent {
  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  onSubmit(): void {
    console.log('form =>');
  }
  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]], //En este campo el primer argumento es el valor por defecto, y el segundo son la validaciones
      checkAdult: ['', [Validators.required]],
      department: [''],
      comment: ['', [Validators.required, Validators.minLength(3)]], //En este campo el primer argumento es el valor por defecto, y el segundo son la validaciones
    });
  }
}
