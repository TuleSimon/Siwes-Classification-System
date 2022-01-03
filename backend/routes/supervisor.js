const router = require('express').Router();
let Supervisor  = require('../models/supervisor.model');
let Student  = require('../models/student.model');

router.route('/').get((req,res) => {
    Supervisor.find().then((supervisor) => res.status(200).json(supervisor)).
    catch(err => res.status(400).json(err));
})

router.route('/:id').get((req,res) => {
    Supervisor.findById(req.params.id).then((supervisor) => res.status(200).json(supervisor)).
    catch(err => res.status(400).json(err));
})

router.route('/updateProfilePicture').post((req,res) => {
    Supervisor.findByIdAndUpdate(req.body.id,{profilePicture:req.body.profilePicture}).then( (supervisor) => 
    res.status(200).json(supervisor)).
    catch(err => res.status(400).json(err));
   
})

router.route('/students').post((req,res) => {
   
    Student.find({supervisorID:req.body.id}).then( (students) => 
    res.status(200).json(students)).
    catch(err => res.status(400).json(err));
   
})




router.route('/signup').post((req,res) => {
    Supervisor.find({employeeno:req.body.employeeno} )
    .then(supervisor => {
        if(supervisor.length>0 || supervisor[0]!=null)
            return res.status(400).json('Supervisor Already Exists')
        else{
            const NewSupervisor = new Supervisor(req.body)
            NewSupervisor.save().then(() => res.json('Supervisor Added')).
            catch(err => res.status(400).json(err))
        }}).catch(err => res.status(500).json(err));
})

router.route('/signin').post((req,res) => {
    Supervisor.find({employeeno:req.body.employeeno, password:req.body.password}).then((supervisor) => res.json(supervisor)).
    catch(err => res.status(400).json(err))
})

module.exports = router;