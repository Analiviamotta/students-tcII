export class Phone {
    private readonly phoneNumber: string

    constructor(phoneNumber: string){
        if(!Phone.isValid(phoneNumber)) throw new Error('Phone number invalid')
            
        this.phoneNumber = phoneNumber

        
    }

    static isValid(phone: string): boolean {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;

        return phoneRegex.test(phone);
    }


    public equals(other: Phone): boolean {
        return this.phoneNumber === other.phoneNumber;
    }
}