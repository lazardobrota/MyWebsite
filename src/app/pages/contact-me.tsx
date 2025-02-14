import { LegacyRef, useState } from "react";
import Button from "../components/ui/button";
import Input from "../components/ui/input";
import { RefInfo } from "../types/reference";
import TextArea from "../components/ui/textarea";

interface ContactInfo {
  name: string,
  subject: string,
  message: string
}

export default function ContactMe({ref}: RefInfo) {

  const [contactInfo, setContactInfo] = useState<ContactInfo>({name: "", subject: "", message: ""})
  const email: string = "lazardobrota1323@gmail.com"

  function onClick() : void {
    console.log(contactInfo)
    window.open(`https://mail.google.com/mail/?view=cm&to=${atob("cG9ydGZvbGlvbXl3ZWJzaXRlMjU4MUBnbWFpbC5jb20=")}&su=${contactInfo.subject}&body=${contactInfo.message}`, "_blank")?.focus();
  }


  return (
    <div ref={ref as LegacyRef<HTMLDivElement>} id="contact-me" className="flex flex-col gap-20 items-center px-8 lg:px-36">
      <p className="font-bold text-4xl lg:text-h1">Contact Me</p>
      <div className="flex flex-col gap-16 w-full max-lg:max-w-3xl lg:max-w-5xl">
        <div className="flex flex-col gap-6 lg:gap-12">
          <div className="flex flex-col lg:flex-row gap-6">
            <Input onChange={e => setContactInfo({...contactInfo, name: e.target.value})} name="Name"  placeholder="Your Name"></Input>
            <Input onChange={e => setContactInfo({...contactInfo, subject: e.target.value})} name="Subject" placeholder="Subject"></Input>
          </div>
          <TextArea  onChange={e => setContactInfo({...contactInfo, message: e.target.value})} name="Message" placeholder="Message"></TextArea>
        </div>
        <div className="flex justify-center">
          <Button onClick={onClick} name="Submit"></Button>
        </div>
      </div>
    </div>
  )
}