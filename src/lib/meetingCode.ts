import Meeting from "@/models/Meeting" 

const characters: string = "abcdefghijklmnopqrstuvwxyz" 

function generateCode(): string {
  let generatedCode: string = "" 
  const CodeLength: number = 10 

  for (let index = 0; index < CodeLength; index++) {
    let randomSelectedCharacter: string = characters.charAt(Math.floor(Math.random() * characters.length)) 
    generatedCode += randomSelectedCharacter 
  }

  return generatedCode 
}

export default async function generateMeetingCode(){
  let generatedMeetingCode: string 
  do {
    generatedMeetingCode = generateCode() 
  } while ((await Meeting.find({ meetingCode: generatedMeetingCode })).length !== 0)

  return generatedMeetingCode 
}