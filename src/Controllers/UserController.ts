import { request, Request, Response } from "express" 
import EmailService from '../services/EmailService'


const users =[
  {name: 'Diego ' , email:'diego@gmail.com'},
]
export default {
  async index(req: Request, res: Response){
    return res.json(users)
  },

async create(req: Request , res: Response){
  const emailService = new EmailService()

  emailService.sendmail({
  to:{name:'Diego Fernandes ',
   email: 'diego@rocketseat.com.br'},

  message:{subject: 'Bem vindo ' 
  , body:  'Seja bem vindo'}
})
return res.send()

}


}