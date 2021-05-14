import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [];

//all routes in here are starting with /users

router.get('/',(req,res)=>{
    console.log('Getting all users ...');
    res.send(users);
});

router.post('/',(req,res)=>{

    const newUser = req.body;
    
    users.push({...newUser, id:uuidv4()});
    res.send(users);
});

router.get('/:id', (req,res)=>{

    const {id} = req.params;

    const existingUser = users.find(u => u.id == id);

    if(existingUser)
        res.send(existingUser);
    else
        res.send(`User not found`);
});

router.delete('/:id',(req,res)=>{

    const {id} = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(users);
});

router.patch('/:id', (req,res)=>{

    const{ id } = req.params;
    const{ firstName, lastName, email, phone } = req.body;

    const user = users.find(u => u.id == id);

    if(user)
        res.send(`User not found`);

    if(firstName)
        user.firstName = firstName;

    if(lastName)
        user.lastName = lastName;

    if(email)
        user.email = email;

    if(phone)
        user.phone = phone;

    res.send(user);
    
});


export default router;