// Entities
import { Registration } from "../domain/entities/Registration"
import { Seminar } from "../domain/entities/Seminar"
import { Student } from "../domain/entities/Student"

// Enums
import { GENDER } from "../domain/enums/Gender"

// Value Objects
import { Email } from "../domain/value-objects/Email"
import { Phone } from "../domain/value-objects/Phone"


const seminar = new Seminar("Typescript Advanced", 4.5)


const student1 = new Student("Alice", new Phone("123456789"), new Email("alice@example.com"), GENDER.FEMALE)
const student2 = new Student("Bob", new Phone("987654321"), new Email("bob@example.com"), GENDER.MALE)
const student3 = new Student("Charlie", new Phone("456123789"), new Email("charlie@example.com"), GENDER.MALE)
const student4 = new Student("Diana", new Phone("741852963"), new Email("diana@example.com"), GENDER.FEMALE)


seminar.addStudent(student1)
seminar.addStudent(student2)
seminar.addStudent(student3)
seminar.addStudent(student4)

console.log("lista de estudantes" + JSON.stringify(seminar.getStudents()))

seminar.removeStudent(student1.getId())

const registration1 = new Registration(student1, seminar)



console.log(registration1.getGenderAverage()) 

seminar.removeStudent(student2.getId())
console.log(registration1.getGenderAverage())

console.log("lista de estudantes" + JSON.stringify(seminar.getStudents()))