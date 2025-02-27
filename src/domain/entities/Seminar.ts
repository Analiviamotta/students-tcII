import { Student } from "./Student"
import { Registration } from "./Registration"

// Utils
import { generateId } from "../../infrastructure/utils"

// Types
import { EntityName } from "../../application/dtos/shared/entityName"


export class Seminar {
    private name: string
    private rate: number
    private readonly id: string
    private students: Student[]
    private registrations: Registration[]

    constructor(name: string, rate: number) {
        this.name = name
        this.rate = rate
        this.id = generateId(this.constructor.name.toLowerCase() as EntityName)
        this.students = []
        this.registrations = []
    }

    public addStudent(student: Student) {
        this.students.push(student)
    }

    public removeStudent(studentId: string) {
        const removeStudentIndex = this.students.findIndex(student => student.getId() == studentId)

        this.students.splice(removeStudentIndex, 1)
    }

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }


    public getRate(): number {
        return this.rate
    }

    public getStudents(): readonly Student[] {
        return this.students
    }

    public getRegistration(): readonly Registration[] {
        return this.registrations
    }
}