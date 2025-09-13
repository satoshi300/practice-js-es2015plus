import User from './User.js';

export default class Admin extends User {
    constructor({ login = '', password = '' }) {
        // wywołanie konstruktora User
        super({ login, password });
    }

    // nadpisujemy tylko walidację hasła
    isPasswordCorrect() {
        return this.password.length >= 10;
    }
}