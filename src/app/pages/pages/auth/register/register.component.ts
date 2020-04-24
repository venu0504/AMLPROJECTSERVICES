import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { ApiProvider } from 'src/app/services/api-provider';


@Component({
  selector: 'vex-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  inputType = 'password';
  visible = false;
  isTermChecked= false;
  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef,
    private apiProvider: ApiProvider,
  ) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    });
  }

  register() {
    const inputData = {
      name: this.registrationForm.value.name,
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
      passwordConfirm: this.registrationForm.value.passwordConfirm
    }
    console.log({inputData})
   
    this.apiProvider.register('register',inputData).subscribe(
    async resdata => {
              const res = resdata;
              if(res){
                //show some message
                this.router.navigate(['/login'])
              }
      }, async (error) => {
        console.log("error occured")
        this.router.navigate(['/dashboard'])
      });
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
