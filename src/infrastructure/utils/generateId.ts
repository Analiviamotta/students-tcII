// Types
import { EntityName } from "../../application/dtos/shared"


let counter = 0

export function generateId(entityName: EntityName): string {

    const random = Math.floor(Math.random() * 1000000)
    counter = (counter + 1) % 1000

    return `${entityName}-${random}-${counter}`
}
