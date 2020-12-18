
/**
 * 1. Creating a service class that handles the complex logic, this keeps our components lightweight.
 * 2. Creating a simple class with a login method that takes in the arguments username and password. 
 *  - We mark the Login service available for dependency injection by decorating it with the @Injectable annotation. 
 *  - Whenever a service is added, add it to the providers array of the module class. This states that we will want to use this service is the module. 
 */

import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    login(username, password) {
        if (username === "jason" && password === "123")
            return true;
        else
            return false;
    }
}