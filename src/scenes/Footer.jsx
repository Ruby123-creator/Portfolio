import SocialMediaIcons from "../components/SocialMediaIcons";
const Footer = () => {
  let mediaicons =[ {link:"https://www.linkedin.com/in/ruby-pal-123creator/",img:"fa-brands fa-linkedin-in" ,alt:"linkedin"},{link:"https://github.com/Ruby123-creator",img:"fa-brands fa-github" ,alt:"github"} ,{
    link:"" ,img:"fa-solid fa-phone" ,alt:"9911412558"
  },{link:"mailto:rubyp20001@gmail.com",img:"fa-regular fa-envelope" ,alt:"rubyp20001@gmail.com"}]
  return (
    <footer className=" pt-10">
      <div className="flex justify-center flex-wrap items-center space-x-5">
          {
            
            mediaicons.map((element,index)=>
              <SocialMediaIcons key={index} icon={element.img} href = {element.link} alt ={element.alt}/>
)
          }
          </div>
      <div className="w-10/12 mx-auto">
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Ruby Pal
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2022 Ruby pal. All Rights Reserved.
          </p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
