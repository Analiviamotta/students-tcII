import { Student } from "./Student"
import { Seminar } from "./Seminar"

// Enums
import { GENDER } from "../enums/Gender"

// Utils
import { calculatePercentage, generateId } from "../../infrastructure/utils"

// Types
import { EntityName } from "../../application/dtos/shared/entityName"

export class Registration {
    private readonly id: string
    private readonly student: Student
    private readonly seminar: Seminar

    constructor(student: Student, seminar: Seminar) {
        this.student = student
        this.seminar = seminar
        this.id = generateId(this.constructor.name.toLowerCase() as EntityName)
    }

    public getStudent(): Student {
        return this.student
    }

    public getSeminar(): Seminar {
        return this.seminar
    }

    public getGenderAverage(): { maleAvg: number; femaleAvg: number } {
        const students = this.seminar.getStudents()
        if (!students?.length) return { maleAvg: 0, femaleAvg: 0 }

        const { femaleCount, maleCount } = this.countByGender(students)

        return {
            maleAvg: calculatePercentage(maleCount, students.length),
            femaleAvg: calculatePercentage(femaleCount, students.length),
        }
    }

    private countByGender(students: readonly Student[]): { femaleCount: number; maleCount: number } {
        return students.reduce(
            (acc, student) => {
                student.getGender() === GENDER.FEMALE ? acc.femaleCount++ : acc.maleCount++
                return acc
            },
            { femaleCount: 0, maleCount: 0 }
        )
    }
}
