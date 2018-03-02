export class User {
    name: string;
    email: string;
    username: string;
    password: string;
    role: string;

    constructor(userInfo: any) {
        this.username = userInfo.username;
        this.password = userInfo.password;
        this.role     = "test";
    }

    getRole(): String {
        return this.role
    }

    isValid(): Boolean {
        return this.username != null && this.password != null;
    }
}