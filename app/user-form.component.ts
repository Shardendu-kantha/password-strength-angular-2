import { Component } from '@angular/core';
import { User } from './form-fields';

@Component({
    selector: 'user-form',
    styles: [`
        form {
            padding: 10px;
        }
    `],
    templateUrl: './app/user-form.component.html'
})

export class UserFormComponent {
    newUser = new User('');
    submitted: boolean = false;
   
    
    onSubmit() { this.submitted = true; }
}