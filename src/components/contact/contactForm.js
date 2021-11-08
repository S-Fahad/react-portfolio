// import "./contact.css";

export default function ContactForm() {
  return (
    <div className="contactForm">
      <h2>Send me a message</h2>
      <label>
        First and Last Name
        <input type="text" disabled />
      </label>
      <label>
        Phone number
        <input type="number" disabled />
      </label>
      <label>
        Email address
        <input type="email" disabled />
      </label>
      <label>
        Message *
        <textarea
          name="Your message"
          placeholder="Your message here"
          rows="5"
          disabled
        ></textarea>
      </label>
      <button disabled>Send Message</button>
    </div>
  );
}
