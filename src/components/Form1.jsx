import CustomButton from "./CustomButton"

const Form1 = () => {
  return (
    <form className="flex flex-col gap-5 ">
       
            <input type="text" name="name" id="name" placeholder="First Name" className="input-style text-white"/>
            <input type="email" name="Mail" id="Mail" placeholder=" Mail" className="input-style"/>
            <textarea name="message" id="message" cols="20" rows="3" placeholder="Message" className="input-style"></textarea>
       <div className="w-full justify-center flex">
        <CustomButton 
            title="Submit"
            customStyle="w-6/12"
        /></div>
    </form>
  )
}

export default Form1