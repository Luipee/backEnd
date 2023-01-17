interface IMailTO{
  name: string
  email: string

}

interface IMailMessage{
  subject: string
  body: string
  attachment ?: string[]
}
interface IMessageDTO{
  to:IMailTO
  message:IMailMessage
}
interface IMailService{
  sendmail(req: IMessageDTO):void
}
//data transfer object (DDD)

class EmailService implements IMailService{
 sendmail({to, message}: IMessageDTO ){
  console.log(`Email enviado para ${to.name}: ${message.subject} `)
  }
}

 export default EmailService