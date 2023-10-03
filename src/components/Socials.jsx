import { instagram, facebook, x, linkedin } from "../assets"
const Socials = () => {
  return (
    <div className="flex flex-col gap-2">
        <p className="text-color1 font-normal">Share on</p>
        <div className="flex gap-4">
            <img src={instagram} alt="instagram"  className="h-3 w-3"/>
        
            <img src={x} alt="x" className="h-3 w-3"/>
            <img src={facebook} alt="facebook" className="h-3 w-3"/>
            <img src={linkedin} alt="linkedin" className="h-3 w-3"/>

        </div>
    </div>
  )
}

export default Socials