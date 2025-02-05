import { LegacyRef } from "react";
import Button from "../components/ui/button";
import Input from "../components/ui/input";
import { RefInfo } from "../types/reference";

export default function ContactMe({ref}: RefInfo) {
  return (
    <div ref={ref as LegacyRef<HTMLDivElement>} id="contact-me" className="flex flex-col gap-20 items-center px-8 lg:px-36">
      <p className="font-bold text-4xl lg:text-h1">Contact Me</p>
      <div className="flex flex-col gap-16 w-full max-lg:max-w-3xl lg:max-w-5xl">
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