import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { rmAnimations } from 'src/app/shared/animations/rm-animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
  animations: [rmAnimations]
})
export class ContactComponent implements OnInit {
  contactForm = this.fb.group({
    name: [''],
    email: [''],
    phone:[''],
    companyName: [''],
    currentSite: [''],
    budget: [],
    projectDescription: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  generateContactForm() {

  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

}
