import { Component, OnInit  } from '@angular/core'

import { NgForm } from '@angular/forms';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';    
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  submitted = false;
  
  constructor(private userService: UserService, private toastr: ToastrService,private formBuilder: FormBuilder) { }
    
  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobileno: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      date:['', Validators.required]
    });
  }

  get f() { return this.registrationForm.controls; }
 /* resetForm(form?: NgForm) {
    if (form != null)
    form.reset();
     this.registrationForm = {
      name: '',
      mobileno: '',
      emailid: '',
      password: '',
      address: '',
      date:''
    }
  }*/

  OnSubmit() {
      this.submitted = true;
      if (this.registrationForm.invalid) {
        this.toastr.error("<h1>test</h1>");
        return;
      }
    
      
     this.userService.registerUser(this.registrationForm.value)
      .subscribe((data: any) => {console.log(data);
        if ("id" in data) {
          this.toastr.success('User registration successful');
          //this.registrationForm.reset();
        }
        else
          this.toastr.error("Could not Register the user. Please try again later.");
      });
      

        // stop here if form is invalid
        

        // display form values on success
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registrationForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registrationForm.reset();
}

}