import express from 'express'
const  routes=express.Router()

routes.get('/name',function(req,res,next){
    res.send('Sachin')
})
export default routes;
