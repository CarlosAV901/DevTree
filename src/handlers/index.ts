import User from "../models/User"
import { Request, Response } from "express"

export const createAccount = async (req: Request, res: Response) => {
    try {
        const {email} = req.body

        const userExist = await User.findOne({email})

        if(userExist){
            const error = new Error("El usuario ya esta registrado")
            res.status(409).json({error: error.message})
            return
        }

        const user = new User(req.body)

        await user.save()

        res.status(201).send("Registro creado correctamente")
        //await User.create(req.body) 
    } catch (error) {
        
    }
}