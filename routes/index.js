import express from "express";

const router = express.Router();
let users = [


     {
id:"2",
name:"jesus",
address:"Ana",
age:95,

     }
]
//post
router.post('/users/create',(req, res)=>{
   //body
   users.push(req.body)
   res.send("ok");
})
//get
router.get('/users',(req, res)=>{
    res.status(200).json(users)
});

//Put 
router.put('/users/update/:id',(req,res)=>{
    const user = users.find(u=>u.id === req.params.id)
    if (!user){
        res.status(404).send("El recurso no se encuentra!!!");
        return
    }
    users=user.map(u=>u.id ===req.params.id? updateUser: u);
    res.status(200).send("Usuario actualizado con exito!!")
    })

export default router;