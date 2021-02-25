import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import {useForm} from "react-hook-form"

const Contacts = () => {

    const [successMessage, setSuccessMessage] = useState("");
    
    const {register,handleSubmit,errors} =useForm();
    const serviceId = "Service_ID";
    const templateId = "template_ID";
    const userId = "user_rae2eHYczXISOkeKVlKkL";

    const onSubmit=(data,r)=>{
        sendEmail(
            serviceId,
            templateId,
            {
                name:data.name,
                phone:data.phone,
                email:data.email,
                subject:data.subject,
                description:data.description
            },
            userId
        );
        r.target.reset();
    }

    const sendEmail= (serviceId, templateId, variables, userId) => {
    
        emailjs.send(serviceId, templateId, variables, userId)
          .then(() => {
              setSuccessMessage("Form Sent Successfully! I'll Contact you as soon as possible");
          }).catch(error=> console.log(`Some Error Occured ${error}`));
      }

    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
                <h1>Contacts</h1>
                <p>Please fill out the form to Contact Me, I will Contact you</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <input 
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            ref={
                                register({
                                    required:"Please Enter Your Name",
                                    maxLength:{
                                        value:20,
                                        message:"Please Enter Fewer Than 20 Characters"
                                    }
                                })
                            }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>
                        <div className="text-center">
                            <input 
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone"
                            ref={
                                register({
                                    required:"Please Enter Your Phone Number"
                                })
                            }
                            />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>
                        <div className="text-center">
                            <input 
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            ref={
                                register({
                                    required:"Please Enter Your Email",
                                    pattern:{
                                        value:/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                                        message:"Invalid Email!"
                                    }
                                })
                            } 
                            />
                        
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>
                        <div className="text-center">
                            <input 
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                            ref={
                                register({
                                    required:"OOPS! You forgot the Subject",
                                })
                            }
                            />
                        
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>

                    </div>
                    <div className="col-md-6 col-xs-12">
                    <div className="text-center">
                        <textarea
                            type="text" 
                            className="form-control"
                            placeholder="Description"
                            name="description"
                            ref={
                                register({
                                    required:"OOPS! You forgot to add the description"
                                })
                            }
                        />
                    
                        <div className="line"></div>
                    </div>
                    <span className="error-message">
                            {errors.description && errors.description.message}
                        </span>
                        <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
