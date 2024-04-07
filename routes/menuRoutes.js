const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');
const Person = require('../models/Person');

router.post('/',async (req, res)=>{
    try{
        const data = req.body //assuming the equest body contains the person data

        //create a new Person document using the mongoose model
        const newMenuItem = new MenuItem(data);
    
        //save the new person to the database
        const response = await newMenuItem.save();
        console.log('data saved');
        res.status('200').json(response);

    }catch(err){
        console.log(err);
        res.status('500').json({error: 'Internal server error'})
    }
})

router.get('/', async (req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status('200').json(data);

    }catch(err){
        console.log(err);
        res.status('500').json({error: 'Internal server error'})
    }
})

router.get('/:taste', async (req,res)=>{
    try{
        const taste = req.params.taste;
        if(taste == 'sweet'|| taste == 'spicy'|| taste == 'sour'){
            const response = await MenuItem.find({taste: taste})
            console.log('response fetched');
            res.status('200').json(response)
        }


    }catch(err){
        console.log(err);
        res.status('500').json({error: 'Internal server error'})
    }
})



module.exports = router;