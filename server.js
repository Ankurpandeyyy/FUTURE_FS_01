require("dotenv").config({ path: "./portfolio/.env" });
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use("/", router);
app.listen(5000 , () => console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
    service : 'gmail',
    auth:{
        user : process.env.EMAIL_USER,
        pass : process.env.EMAIL_PASS,
    },
});

contactEmail.verify((error) => {
    if(error)
        console.log(error);
    else
        console.log("Ready to send");
})

router.post("/contact",(req,res)=>{
    const name = req.body.firstName +" "+ req.body.lastName ;
    const email = req.body.email ;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail={
        from : name ,
        to : process.env.EMAIL_USER,
        subject : "Contact Form Submission - Portfolio",
        html : `<p>Name : ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail,(error)=>{
        if(error)
            res.json(error);
        else
            res.json({code: 200 , status: "Message Sent"});
    });
});