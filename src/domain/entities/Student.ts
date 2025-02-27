import { Seminar } from "./Seminar"
import { Registration } from "./Registration"

// Enums
import { GENDER } from "../enums/Gender"

// Utils
import { generateId } from "../../infrastructure/utils"

// Value Objects
import { Email } from "../value-objects/Email"
import { Phone } from "../value-objects/Phone"

// Types
import { EntityName } from "../../application/dtos/shared/entityName"

export class Student {
    private readonly id: string
    private name: string
    private phone: Phone
    private email: Email
    private gender: GENDER
    private seminars: Seminar[]
    private registrations: Registration[]

    constructor(name: string, phone: Phone, email: Email, gender: GENDER) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.gender = gender;
        this.id = generateId(this.constructor.name.toLowerCase() as EntityName);
        this.seminars = []
        this.registrations = []
    }

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getPhone(): Phone {
        return this.phone
    }

    public getEmail(): Email {
        return this.email
    }


    public getGender(): GENDER {
        return this.gender
    }

    public getRegistration(): readonly Registration[] {
        return this.registrations
    }

    public getSeminars(): readonly Seminar[] {
        return this.seminars
    }


}