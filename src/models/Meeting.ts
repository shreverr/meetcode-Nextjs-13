import mongoose from 'mongoose' 

const MeetingSchema = new mongoose.Schema({
  host: String,
  meetingCode: String,
}) 

export default mongoose.models.Meeting || mongoose.model('Meeting', MeetingSchema) 