const router = require('express').Router();
const axios = require('axios');
let Student  = require('../models/student.model');
let Supervisor  = require('../models/supervisor.model');

router.route('/').get((req,res) => {
    Student.find().then((excercise) => res.status(200).json(excercise)).
    catch(err => res.status(400).json(err));
})

router.route('/assignSupervisor').post((req,res) => {
    let supervisorID = null;
    if(req.body.id==null){
        return res.status(400).json('No id passed')
    }
    Supervisor.find().then(supervisors => {
            if(supervisors.length>0){
            const randIndex = Math.floor(Math.random() * supervisors.length)
            const temp = supervisors[randIndex]
            supervisorID = temp._id
            Student.findByIdAndUpdate(req.body.id,{supervisorID:temp._id}).then( () => res.status(200).json('Updated')).
            catch(err => res.status(400).json(err));
        }
        else
            return res.status(400).json('No Supervisor Available');
    })
    .catch(err => res.status(400).json(err))
   
})

router.route('/updateProfilePicture').post((req,res) => {
   
    Student.findByIdAndUpdate(req.body.id,{profilePicture:req.body.profilePicture}).then( (student) => 
    res.status(200).json(student)).
    catch(err => res.status(400).json(err));
   
})

router.route('/signup').post((req,res) => {
    Student.find({matno:req.body.matno} )
    .then(excercise => {
        if(excercise.length>0 || excercise[0]!=null)
            return res.status(400).json('User Email Or Matno Already Exists')
        else{
            const NewStudent = new Student(req.body)
            return NewStudent.save().then((student) => {
                axios.post('http://localhost:5000/students/assignSupervisor', {id:student._id}).
                then(() => {
                    return res.json('Student Added '+student)})
                    .catch(err => res.status(400).json(err)) 
                })               
                .catch(err => res.status(400).json(err)) 
        }
    })

})

router.route('/signin').post((req,res) => {
    Student.find({matno:req.body.matno,password:req.body.password} ).then((excercise) => res.json(excercise)).
    catch(err => res.status(400).json(err))
})

module.exports = router;