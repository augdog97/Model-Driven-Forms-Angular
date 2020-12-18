
/**
 * Declared a static method cannotContainSpace that takes in a FormControl object as an argument.
 * We access the value string property of the formControl and check if there are spaces in it with the indexOf method. 
 * If there are spaces in it, we return cannotContainSpace: true, and if there are no spaces, we return null.
 */

import { FormControl } from '@angular/forms';

export class PasswordValidator {
    static cannotContainSpace(formControl: FormControl) {
        if (formControl.value.indexOf(' ') >= 0)
            return { cannotContainSpace: true };

        return null;
    }
}