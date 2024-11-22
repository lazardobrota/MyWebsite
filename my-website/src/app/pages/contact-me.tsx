import Button from "../components/ui/button";
import Input from "../components/ui/input";

export default function ContactMe() {
  return (
    <div id="contact-me" className="flex flex-col gap-20 items-center px-5">
      <p className="font-bold text-4xl">Contact Me</p>
      <div className="flex flex-col gap-16 items-center">
        <div className="flex flex-col gap-6 lg:gap-12">
          <div className="flex flex-wrap gap-6">
            <Input name="Name"  placeholder="Your Name"></Input>
            <Input name="Email" placeholder="Your Email"></Input>
          </div>
          <Input name="Message" placeholder="Your Message"></Input>
        </div>
        <Button name="Submit"></Button>
      </div>
    </div>
  )
}