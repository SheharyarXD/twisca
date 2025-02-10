import React from "react";
import { useState } from "react";
import Header from "./header";
import FooterPage from "./footer";
import emailjs from "@emailjs/browser";
const Contact=()=>{
    emailjs.init("OfmlMCjmuKg7pjl35");


    const [name, setName] = useState('');
    const [pnum, setPnum] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
    
      // Simple regex for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Regex for phone number (allows only digits, 7-15 length)
      const phoneRegex = /^[0-9]{7,15}$/;
    
      // Check if name is empty
      if (!name.trim()) {
        alert('Please enter your name.');
        return;
      }
    
      // Check if email is valid
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
    
      // Check if phone number is valid
      if (!phoneRegex.test(pnum)) {
        alert('Please enter a valid phone number (7-15 digits).');
        return;
      }
    
      // Check if comment is empty
      if (!comment.trim()) {
        alert('Please input a message.');
        return;
      }
    
      // Create form data
      const formData = {
        Name: name,
        ContactNumber: pnum,
        sender: email,
        comment: comment,
      };
      console.log(formData);
    
      // Send the email using emailjs
      emailjs
        .send('xdgaming', 'template_7j0ekxq', formData)
        .then(
          (response) => {
            console.log('Email sent successfully!', response);
            alert('Thank you! Your message has been sent.');
          },
          (error) => {
            console.error('Failed to send email:', error);
            alert('Oops! Something went wrong. Please try again.');
          }
        );
    };
    
    return(
        <>
        <Header></Header>
        <div id="contactUs" className="mt-[12vh] overflow-hidden block relative md:h-[85vw] lg:h-fit">
  <div className="bg-white h-full absolute w-[70%] left-0"></div>
  <div className="green-bg3  h-full absolute w-[30%] right-0"></div>
  <div className="h-auto  md:py-[5vh]  flex items-center justify-center">
    <div className="bg-white z-10 overflow-hidden flex flex-col md:flex-row w-full px-4 md:px-0 md:max-w-[85%] md:mx-[1.6vw]  md:min-h-[62vh] ">

      <div className="w-full  lg:w-1/2 px-[3.1vw] flex flex-col justify-center ">
        <h2 className="text-4xl md:text-[3.5rem] leading-tight font-bold  mb-[0.8vw] flex  lg:text-[4rem] allura-regular items-center pt-[1vw]">
        Got Questions? <br />
        Let Us Help You! </h2>

        <form id="contactForm"  method="POST" className="space-y-4 py-[1vw] pb-[4vw]">
        <div className="form-group mb-3 relative">
            <input type="text" id="name" onChange={(e) => setName(e.target.value)} className="peer  h-[30px] md:h-[3.2vw] form-control block w-full px-3 py-2.5 text-[12px] md:text-sm text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#8B024B]  rounded-[1vw] md:rounded-[0.5vw]" placeholder=" " required />
            <label htmlFor="name" className="form-label bg-white px-1 absolute  text-[12px] md:text-[1.1vw] text-gray-500 duration-300 transform -translate-y-3 md:-translate-y-5 top-[0.7vw] left-[1vw] z-10 origin-[0] peer-focus:left-[1vw] peer-focus:text-[#8B024B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-[3vw] md:peer-focus:-translate-y-[1.5vw]">Name<span className="text-[#8B024B] px-1">*</span></label>
        </div>
        <div className="form-group mb-6 relative">
          <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} className="peer h-[30px] md:h-[3.2vw] form-control block w-full px-3 py-[0.8vw] text-[12px] md:text-sm text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#8B024B]  rounded-[1vw] md:rounded-[0.5vw]" placeholder=" " required />
          <label htmlFor="email" className="form-label bg-white px-1 absolute  text-[12px] md:text-[1.1vw] text-gray-500 duration-300 transform -translate-y-3 md:-translate-y-5 top-[0.7vw] left-[1vw] z-10 origin-[0] peer-focus:left-[1vw] peer-focus:text-[#8B024B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-[3vw] md:peer-focus:-translate-y-[1.5vw]">Email<span className="text-[#8B024B] px-1">*</span></label>
      </div>
      <div className="form-group mb-6 relative">
        <input type="tel" id="pnum" onChange={(e) => setPnum(e.target.value)} className="peer rounded-[1vw] md:rounded-[0.5vw]  h-[30px] md:h-[3.2vw] form-control block w-full px-3 py-2.5 text-[12px] md:text-sm text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#8B024B] " placeholder=" "  />
        <label htmlFor="pnum" className="form-label bg-white px-1 absolute  text-[12px] md:text-[1.1vw] text-gray-500 duration-300 transform -translate-y-3 md:-translate-y-5 top-[0.7vw] left-[1vw] z-10 origin-[0] peer-focus:left-[1vw] peer-focus:text-[#8B024B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-[3vw] md:peer-focus:-translate-y-[1.5vw]">Phone Number

        </label>
    </div>
    <div className="form-group mb-6 relative">
      <textarea id="comment" onChange={(e) => setComment(e.target.value)} className="peer  rounded-[1vw] md:rounded-[0.5vw] h-[80px] md:h-[5.2vw] form-control block w-full px-3 py-2.5 text-[12px] text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#8B024B] " placeholder=" " ></textarea>
      <label htmlFor="comment" className="form-label bg-white px-1 absolute text-[12px] md:text-[1.1vw] text-gray-500 duration-300 transform -translate-y-3 md:-translate-y-5 top-[0.7vw] left-[1vw] z-10 origin-[0] peer-focus:left-[1vw] peer-focus:text-[#8B024B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-[3vw] md:peer-focus:-translate-y-[1.5vw]">Message<span className="text-[#8B024B] px-1">*</span>

      </label>
  </div>





          <button onClick={(e)=>handleSubmit(e)} type="submit" className="w-full bg-[#8B024B] text-white py-[1.5vw] md:py-[1vw] text-[12px] md:text-[1.2vw] font-bold hover:bg-[#8B234B] focus:outline-none  rounded-[1vw] md:rounded-[0.5vw]">Send Message</button>
        </form>
      </div>

  
      <div className="w-full lg:w-1/2 hidden lg:block relative min-h-full md:min-h-0 ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.55800898257!2d74.16958105977912!3d31.48312759108344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1738939779938!5m2!1sen!2s" 
         className="w-full h-full absolute"
         style={{border:0}} 
         allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
      </div>
    </div>
  </div>


</div>
        <FooterPage></FooterPage>
        </>
    );
}
export default Contact;
