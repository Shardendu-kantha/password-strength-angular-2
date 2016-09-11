import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form.component';
import { passwordStrengthComponent } from './password-strength.component';

@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule 
    ],
    declarations: [ 
        AppComponent,
        UserFormComponent,
        passwordStrengthComponent         
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}