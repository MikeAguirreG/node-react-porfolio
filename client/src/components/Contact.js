import React, { useState } from 'react'
import ContactIcons from './ContactIcons'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(1),
    },
  }));

const Contact = () => {
    const classes = useStyles({
        input: {
            color: 'white',
            backgroundColor: 'red'
        }
    });
    const styleIcons = {
        color: 'black',
        size: '2.5em',
    }

    const [values, setValues] = useState({
        name:'',
        email:'',
        message:'',
        errorName:'',
        errorEmail:'',
        errorMessage:''
    })
    const { name, email, message , errorName, errorEmail, errorMessage } = values

    const handleChange = name => event => {
        setValues({...values, [name] : event.target.value})
    }

    const validateForm = () => {
        let errorNameText = ''
        let errorEmailText = ''
        let errorMessageText = ''

        if(!name) 
            errorNameText = 'Please type your name.'
        if(!/^\S+@\S+$/.test(email)) 
            errorEmailText = 'Please type a valid email.'
        if(!message)
            errorMessageText = 'Please write me a message'
        
        
        setValues({
            ...values, 
            errorName:errorNameText, 
            errorEmail: errorEmailText, 
            errorMessage: errorMessageText
        })

        if(!errorMessageText && !errorEmailText && !errorMessageText){
            return true
        }else{
            return false
        } 
    
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const isValid = validateForm()
        if(isValid)
            axios.post('api/sendEmail' , {name, email, message})
                 .then(()=>{
                    setValues({
                        ...values, 
                        name:'', 
                        email: '', 
                        message: ''
                    })
                 })
                 .catch(()=>{

                 })
    }
  
    return(
        <div className="page-6">
            <h1>Contact me</h1>
            <h2>I will be glad to answer any question!</h2>
            <form onSubmit={handleSubmit}>
            <TextField 
                name='name'
                onChange={handleChange('name')}
                value={name}
                placeholder="Name."
                error={errorName ? true : false}
                label="Type your name"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                helperText={errorName}
                InputProps={{className: classes.input}}
            />
            <br/>
            <TextField 
                name='email'
                onChange={handleChange('email')}
                type='email'
                value={email}
                placeholder="Email."
                error={errorEmail ? true : false}
                label="Type your email"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                helperText={errorEmail}
            />
            <br/>
            <TextField 
                name='message'
                onChange={handleChange('message')}
                value={message}
                rows="5"
                multiline
                placeholder="Message."
                error={errorMessage ? true : false}
                label="Write me your message"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                helperText={errorMessage}
            />
            <br/>
            <Button 
                type='submit'
            >
            Send Message
            </Button>
            </form>
            <br/>
            <div className="row-icons v-btm">
            <ContactIcons styleIcons={styleIcons} />
            </div>
        </div>
    )
}
export default Contact