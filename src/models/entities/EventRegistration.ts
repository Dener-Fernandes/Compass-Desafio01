import { Schema, model } from "mongoose";
import { ICreateEventRegistrationDTO } from "../dtos/ICreateEventRegistrationDTO";

interface IEventRegistration extends ICreateEventRegistrationDTO {
  createdAt: Date;
}
/* The name EventRegistration was set because the name Event had made a conflict
   with lib.dom.d.ts */
const eventRegistrationSchema = new Schema<IEventRegistration>({
  description: { 
    type: String, 
    required: [true, "A description is required"],
    unique: true,
  },
  dateTime: { 
    type: Date, 
    required: [true, "A dateTime is required"],
  },
  createdAt: { 
    type: Date, 
    default: Date.now() ,
  },
});

const EventRegistration = model<IEventRegistration>("EventRegistration", eventRegistrationSchema);

export { EventRegistration }