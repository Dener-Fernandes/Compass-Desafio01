import { v4 as uuidV4 } from "uuid";

/* The name EventRegistration was set because the name Event had made a conflict
   with lib.dom.d.ts */
class EventRegistration {
  public id: string = "";
  public description: string;
  public dateTime: string;
  public createdAt: string;

  constructor(description: string, dateTime: string, createdAt: string) {
    this.description = description;
    this.dateTime = description;
    this.createdAt = description;

    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { EventRegistration }