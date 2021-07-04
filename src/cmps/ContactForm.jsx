import React from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
init("user_mJ8MfY8IVIm3sKzmeznvT");

export function ContactForm() {

    const [open, setOpen] = React.useState(false);

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                '& .MuiTextField-root': {
                    margin: theme.spacing(1),
                    width: '25ch',
                },
            },
        }),
    );

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_001iee9', 'template_7ad3gk6', e.target, init("user_mJ8MfY8IVIm3sKzmeznvT"))
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }


    
    const handleClickOpen =() =>{
        setOpen(true)
    }

    const handleClose =() =>{
        setOpen(false)
    }

    const classes = useStyles();
    return (
        <div>
               <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          We will be happy to help you
      </Button> 
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={sendEmail}>

                <TextField required id="standard-required" label="Name"
                    type="text" placeholder="Enter your name" name="name" />

                <TextField required id="standard-required" label="Email" type="email" name="email" placeholder="Enter your mail" />

                <TextField required id="standard-required" label="Subject" type="text" name="subject" placeholder="Subject" />

                <TextField id="standard-textarea"
                    label="Message"
                    multiline name="message" placeholder="Your Massage" />
                <input type="submit" value="Send" onClick={handleClose} />
            </form>
            </DialogContentText>
              </DialogContent>
              <DialogActions>
              
              </DialogActions>
     </Dialog>
        </div>
    )
}

