import "./contact.css";
import ContactForm from "./contactForm";

export default function Contact() {
  return (
    <>
      <div className="contactMe" id="contact">
        <h1 className="heading">Contact Me</h1>
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
              <p>
                <i className="far fa-envelope"></i>
                shahfahad9@outlook.com
              </p>
            </div>

            <div>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                Srinagar, india
              </p>
            </div>

            <div>
              <p>
                <i className="fas fa-phone-alt"></i>
                7006974039
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
