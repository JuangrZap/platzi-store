import { Injectable } from '@angular/core';

// Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
// import firebase from 'firebase';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private angularFireAuth: AngularFireAuth) {}

    createUser(email: string, password: string): Promise<any> {
        return this.angularFireAuth.createUserWithEmailAndPassword(
            email,
            password
        );
    }

    login(email: string, password: string): Promise<any> {
        return this.angularFireAuth.signInWithEmailAndPassword(email, password);
    }

    logout(): Promise<any> {
        return this.angularFireAuth.signOut();
    }

    hasUser(): Observable<any> {
        return this.angularFireAuth.authState;
    }
}
