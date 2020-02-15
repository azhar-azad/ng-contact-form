import { Component } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-contact-form';

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.createContactForm();
  }

  onTemplateFormSubmit(form: NgForm) {
    console.log('Your template-based form data: ', form.value);
  }

  onReactiveFormSubmit() {
    console.log('Your reactive form data: ', this.contactForm.value);
  }

  createContactForm() {
    this.contactForm = this.formBuilder.group({
      fullName: [''],
      email: [''],
      message: ['']
    });
  }
}
