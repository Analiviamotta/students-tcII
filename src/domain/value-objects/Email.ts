export class Email {
   private readonly address: string


   constructor(address: string){
    if(!Email.isValid(address))  throw new Error('email invalido')

    this.address = address

   }

   static isValid(address: string): boolean{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(address)
   }

   public equals(other: string){
    return this.address === other
   }

}