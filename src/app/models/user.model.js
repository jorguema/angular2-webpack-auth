export class User {
    constructor(Id, Domain, UserName, FirstName, CompleteName, Email) {
        this.id = Id;
        this.domain = Domain;
        this.userName = UserName;
        this.firstName = FirstName;
        this.completeName = CompleteName;
        this.email = Email;
    }
}

export class UserHelper {
    static mapToObject(result) {
        return new User(result.Id, result.Domain, result.UserName, result.FirstName, result.CompleteName, result.Email);
    }
}