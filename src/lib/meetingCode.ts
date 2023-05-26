const characters: string = "abcdefghijklmnopqrstuvwxyz";

export default function generateMeetingCode(): string {
  let generatedMeetingCode: string = "";
  const meetingCodeLength: number = 10;

  for (let index = 0; index < meetingCodeLength; index++) {
    let randomSelectedCharacter: string = characters.charAt(Math.floor(Math.random() * characters.length));
    generatedMeetingCode += randomSelectedCharacter;
  }

  return generatedMeetingCode;
}