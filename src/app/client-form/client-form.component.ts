import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  clientForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['', Validators.required],
    /*address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),*/
  });
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.clientForm.value);
  }
}
