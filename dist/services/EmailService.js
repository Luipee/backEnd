"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//data transfer object (DDD)
class EmailService {
    sendmail({ to, message }) {
        console.log(`Email enviado para ${to.name}: ${message.subject} `);
    }
}
exports.default = EmailService;
