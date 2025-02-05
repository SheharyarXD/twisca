import React from "react";
import Header from "./header";
import FooterPage from "./footer";
import emailjs from "@emailjs/browser";
const Contact=()=>{
    emailjs.init("OfmlMCjmuKg7pjl35");


document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();


  const formData = {
    Name: document.getElementById("name").value,
    ContactNumber: document.getElementById("pnum").value,
    find_us: document.getElementById("how").value,
    sender: document.getElementById("email").value,
    comment: document.getElementById('comment').value
  };
  // console.log
  if(formData.comment==null || formData.comment==undefined || formData.comment==''){
    alert('Please Input Message')
    return
  }
  emailjs
    .send("xdgaming", "template_7j0ekxq", formData) 
    .then(
      (response) => {
        console.log("Email sent successfully!", response);
        alert("Thank you! Your message has been sent.");
      },
      (error) => {
        console.error("Failed to send email:", error);
        alert("Oops! Something went wrong. Please try again.");
      }
    );
});
    return(
        <>
        <Header></Header>
        <div id="contactUs" className=" overflow-hidden block relative md:h-[85vw] lg:h-fit">
  <div className="bg-white h-full absolute w-[70%] left-0"></div>
  <div className="green-bg3  h-full absolute w-[30%] right-0"></div>
  <div className="h-auto  md:py-[5vh]  flex items-center justify-center">
    <div className="bg-white z-10 overflow-hidden flex flex-col md:flex-row w-full px-4 md:px-0 md:max-w-[85%] md:mx-[1.6vw]  md:min-h-[62vh] ">

      <div className="w-full  lg:w-1/2 px-[3.1vw] flex flex-col justify-center ">
        <h2 className="text-4xl md:text-[3.5rem] leading-tight font-bold  mb-[0.8vw] flex justify-center items-center pt-[1vw]">
        Got Questions? <br />
        Let Us Help You! </h2>

        <form id="contactForm"  method="POST" className="space-y-4 py-[1vw] pb-[4vw]">
        <div className="form-group mb-3 relative">
            <input type="text" id="name" className="peer  h-[30px] md:h-[3.2vw] form-control block w-full px-3 py-2.5 text-[12px] md:text-sm text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#8B024B]  rounded-[1vw] md:rounded-[0.5vw]" placeholder=" " required />
            <label for="name" className="form-label bg-white px-1 absolute  text-[12px] md:text-[1.1vw] text-gray-500 duration-300 transform -translate-y-3 md:-translate-y-5 top-[0.7vw] left-[1vw] z-10 origin-[0] peer-focus:left-[1vw] peer-focus:text-[#8B024B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-[3vw] md:peer-focus:-translate-y-[1.5vw]">Name<span className="text-[#8B024B] px-1">*</span></label>
        </div>
        <div className="form-group mb-6 relative">
          <input type="email" id="email" className="peer h-[30px] md:h-[3.2vw] form-control block w-full px-3 py-[0.8vw] text-[12px] md:text-sm text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#8B024B]  rounded-[1vw] md:rounded-[0.5vw]" placeholder=" " required />
          <label for="email" className="form-label bg-white px-1 absolute  text-[12px] md:text-[1.1vw] text-gray-500 duration-300 transform -translate-y-3 md:-translate-y-5 top-[0.7vw] left-[1vw] z-10 origin-[0] peer-focus:left-[1vw] peer-focus:text-[#8B024B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-[3vw] md:peer-focus:-translate-y-[1.5vw]">Email<span className="text-[#8B024B] px-1">*</span></label>
      </div>
      <div className="form-group mb-6 relative">
        <input type="tel" id="pnum" className="peer rounded-[1vw] md:rounded-[0.5vw]  h-[30px] md:h-[3.2vw] form-control block w-full px-3 py-2.5 text-[12px] md:text-sm text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#8B024B] " placeholder=" "  />
        <label for="pnum" className="form-label bg-white px-1 absolute  text-[12px] md:text-[1.1vw] text-gray-500 duration-300 transform -translate-y-3 md:-translate-y-5 top-[0.7vw] left-[1vw] z-10 origin-[0] peer-focus:left-[1vw] peer-focus:text-[#8B024B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-[3vw] md:peer-focus:-translate-y-[1.5vw]">Phone Number

        </label>
    </div>
    <div className="form-group mb-6 relative">
      <textarea id="comment" className="peer  rounded-[1vw] md:rounded-[0.5vw] h-[80px] md:h-[5.2vw] form-control block w-full px-3 py-2.5 text-[12px] text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#8B024B] " placeholder=" " ></textarea>
      <label for="comment" className="form-label bg-white px-1 absolute text-[12px] md:text-[1.1vw] text-gray-500 duration-300 transform -translate-y-3 md:-translate-y-5 top-[0.7vw] left-[1vw] z-10 origin-[0] peer-focus:left-[1vw] peer-focus:text-[#8B024B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-[3vw] md:peer-focus:-translate-y-[1.5vw]">Message<span className="text-[#8B024B] px-1">*</span>

      </label>
  </div>





          <button type="submit" className="w-full bg-[#8B024B] text-white py-[1.5vw] md:py-[1vw] text-[12px] md:text-[1.2vw] font-bold hover:bg-[#8B234B] focus:outline-none  rounded-[1vw] md:rounded-[0.5vw]">Send Message</button>
        </form>
      </div>

  
      <div className="w-full lg:w-1/2 hidden lg:block relative min-h-full md:min-h-0">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13596.04142745665!2d74.33444081659832!3d31.57876385488925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b98b46808fb%3A0xb97ac7ef65a2d0a2!2sSincSol!5e0!3m2!1sen!2s!4v1734690540382!5m2!1sen!2s"
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
