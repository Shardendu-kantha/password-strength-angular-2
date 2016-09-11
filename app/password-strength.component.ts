import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'password-strength',
    styleUrls: ['./app/password-strength.component.css'],
    templateUrl: './app/password-strength.component.html'
})

export class passwordStrengthComponent {
    @Input() password: string;
    listClass = '';
    passwordStrength = '';

    strength = {
        measureStrength: function (p) {

            let _class = "";
            let _strong = 0;                    
            let _regex = /[$-/:-?{-~!@"^_`\[\]]/g;
                                    
            let _letters = (/[a-z]+/.test(p) && /[A-Z]+/.test(p)); 
            let _numbers = /[0-9]+/.test(p);
            let _symbols = _regex.test(p);
                                    
            let _flags = [_letters, _numbers, _symbols];    

            let _passedMatches = _flags.filter(function(el){ return el === true;}).length;                                  
            
            _strong += 2 * p.length + ((p.length >= 10) ? 1 : 0);
            _strong += _passedMatches * 10;
                
            // short password
            _strong = (p.length < 6) ? Math.min(_strong, 10) : _strong;                                      
            
            // other validations
            _strong = (_passedMatches == 1) ? Math.min(_strong, 20) : _strong;
            _strong = (_passedMatches == 2) ? Math.min(_strong, 30) : _strong;
            _strong = (_passedMatches == 3) ? Math.min(_strong, 40) : _strong;
            
            return _strong;

        }
    };
    
    ngOnChanges(changes) {
        var strength = this.strength.measureStrength(changes.password.currentValue);
        
        if (strength <= 10) { this.listClass = 'too-short'; this.passwordStrength = 'Too Short';}
        else if (strength <= 20) { this.listClass = 'weak'; this.passwordStrength = 'Weak';}
        else if (strength <= 30) { this.listClass = 'good'; this.passwordStrength = 'Good';}
        else { this.listClass = 'strong'; this.passwordStrength = 'Strong';}
  }
}