import Button from "../components/ui/button";
import Input from "../components/ui/input";

export default function ContactMe() {
  return (
    <div id="contact-me" className="flex flex-col gap-20 items-center px-8 lg:px-36">
      <p className="font-bold text-4xl">Contact Me</p>
      <div className="flex flex-col gap-16 w-full max-lg:max-w-3xl">
        <div className="flex flex-col gap-6 lg:gap-12">
          <div className="flex flex-col lg:flex-row gap-6">
            <Input name="Name"  placeholder="Your Name"></Input>
            <Input name="Email" placeholder="Your Email"></Input>
          </div>
          <Input name="Message" placeholder="Your Message"></Input>
        </div>
        <div className="flex justify-center">
          <Button name="Submit"></Button>
        </div>
      </div>
    </div>
  )
}