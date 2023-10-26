export class Message {
  author: string;
  authorGravatar: string = "";
  message: string[];
  id: string;
  dateCreated: Date;

  constructor(
    id: string,
    author: string,
    message: string[],
    dateCreated: Date,
    authorGravatar: string = ""
  ) {
    this.id = id;
    this.author = author;
    this.message = message;
    this.dateCreated = dateCreated;
    this.authorGravatar = authorGravatar;
  }

}
