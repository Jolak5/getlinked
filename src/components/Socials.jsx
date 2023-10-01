import { instagram, facebook, x, linkedin } from "../assets"
const Socials = () => {
  return (
    <div>
        <p className="text-color1">Share on</p>
        <div className="flex gap-2">
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={x} alt="x" />
            <img src={linkedin} alt="linkedin" />

        </div>
    </div>
  )
}

export default Socials