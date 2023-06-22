import Meeting from "@/models/Meeting" 

const characters = "abcdefghijklmnopqrstuvwxyz" 

function generateCode(): string {
  let generatedCode = "" 
  const CodeLength = 10 

  for (let index = 0; index < CodeLength; index++) {
    let randomSelectedCharacter = characters.charAt(Math.floor(Math.random() * characters.length)) 
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