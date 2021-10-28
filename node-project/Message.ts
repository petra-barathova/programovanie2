/**
 * Class Declaraiton for Message class
 */

class Message{
 private message : String;
/**
 * Constrcutor for Message class
 * @param _message  
 */
 constructor(_message: String){
 this.message=_message;

 }
 public getMessage() : String{

    return this.message;
 }
}
export default Message;