"use strict";
/**
 * Class Declaraiton for Message class
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */ (function () {
    /**
     * Constrcutor for Message class
     * @param _message
     */
    function Message(_message) {
        this.message = _message;
    }
    Message.prototype.getMessage = function () {
        return this.message;
    };
    return Message;
}());
exports.default = Message;
