import { flare } from "../assets";
import Form1 from "../components/Form1";
import Socials from "../components/Socials";

const Contact = () => {
  return (
    <div className='flex min-h-screen justify-center items-center w-full'>
      <div className='flex sm:flex-row flex-col w-4/5 justify-around gap-[20px]'>
        <div className='flex flex-col gap-2 justify-center'>
          <h3 className='subhead-text'>Get in touch</h3>
          <p className="paragraph-text">
            Contact <br /> Information
          </p>
          <p className="paragraph-text">
            27,Alara Street <br /> Yaba 100012 <br /> Lagos State
          </p>
          <p className="paragraph-text">Call Us : 07067981819</p>
          <p className="paragraph-text">
            we are open from Monday-Friday <br /> 08:00am - 05:00pm
          </p>
          <Socials />
        </div>
        <div className="form-style">
          <h4 className="text-color1">
            Questions or need assistance? <br /> Let us know about it!
          </h4>
          <Form1 />
        </div>
      </div>
      <img src={flare} alt="flare" className="absolute left-0 w-80 h-80" />
    </div>
  );
};

export default Contact;
