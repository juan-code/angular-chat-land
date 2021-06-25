const MESSAGES = {
  required: 'this field is required',
  email: 'this field need a valid email'
}

export class MessageError {
  private messages = MESSAGES;
  public getMessage(typeError:string):string {
    if(typeError in this.messages) {
      return this.messages[typeError]
    } 
    return ''
  }
  public addMessage(typeError:string, message:string) {
    if(typeError.length > 0 && message.length > 0) {
      this.messages[typeError] = message
    }
  }
  public getAllMessages():object {
    return this.messages
  }
}