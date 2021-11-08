import "./contact.css";
import ContactForm from "./contactForm";
import gmail from "../../images/message.png";
import phone from "../../images/call.png";
import location from "../../images/location.png";

export default function Contact() {
  return (
    <>
      <div className="contactMe" id="contact">
        <h1>Contact Me</h1>
        <div className="contactMe-flex">
          <div className="contactMe-text">
            <h3>Let's connect</h3>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat
            </p>
            <div>
              <img src={gmail} /> <p>shah@gmail.com</p>
            </div>

            <div>
              <img src={phone} /> <p>1(123) 456-7890</p>
            </div>

            <div>
              <img src={location} /> <p>1234 Street, West, VA</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
