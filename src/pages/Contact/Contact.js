import "./Contact.scss";
import { DocumentTitle } from "../../utils/utils";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ContactLink from "../../components/ContanctLink/ContactLink";

const Contact = () => {
  DocumentTitle("Contact Me");

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const form = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Clear the related error when user starts typing
    if (name === "user_email") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        user_email: "", // Clear the error message for email field
      }));
    }
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.user_name.trim()) {
      validationErrors.user_name = "Please enter your name";
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/;
    if (!emailRegex.test(formData.user_email)) {
      validationErrors.user_email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      validationErrors.message = "Please enter your message";
    }

    return validationErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await emailjs.sendForm(
          "service_ddftbnt",
          "template_nt5x99r",
          form.current,
          "7r8MHzHo8KITRpU-c"
        );

        if (response.status === 200) {
          setFormSubmitted(true);
          setSuccessMessageVisible(true);
          console.log("Message sent successfully!", response.text);
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        } else {
          console.error("Email sending error:", response.text);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  useEffect(() => {
    if (successMessageVisible) {
      const timer = setTimeout(() => {
        setSuccessMessageVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessageVisible]);

  return (
    <div className="contact">
      <div className="contact__img-wrapper">
        <div className="contact__slogan">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXN5eG5ybmMwbGZhN2lzcWdoYXd5NW1pZWFmODN4OXNhYWYzbHhsOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cCLA9VfpjsgW3nE0oi/giphy.gif"
            alt="an animated mailbox opening with letters coming out"
            loading="lazy"
          />
        </div>
        <ContactLink />
      </div>
      <div className="contact__content-wrapper">
        <h2 className="contact__title">Let's Reach Out Together!</h2>
        <p className="contact__info">
          Whether you'd like to
          <span className="contact__info--bold"> share your story, discuss a collaboration, or provide feedback, </span>
          your insights are invaluable to me. Looking forward to hearing from you.
        </p>
        <form className="contact__form" ref={form} onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <label htmlFor="user_name">Hi, There! My Name is...</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              value={formData.user_name}
              onChange={handleChange}
            />
            {errors.user_name && <span className="error">{errors.user_name}</span>}
          </div>
          <div className="contact__form-group">
            <label htmlFor="user_email">My Email:</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              value={formData.user_email}
              onChange={handleChange}
            />
            {errors.user_email && <span className="error">{errors.user_email}</span>}
          </div>
          <div className="contact__form-group">
            <label htmlFor="message">My Message:</label>
            <textarea id="message" name="message" rows="4" required value={formData.message} onChange={handleChange} />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          {successMessageVisible ? null : (
            <div className="contact__form-button">
              <button type="submit">{formSubmitted ? "Send Another Message" : "Send to Behina"}</button>
            </div>
          )}
        </form>
        {successMessageVisible && (
          <div className="contact__success-message">
            <p>Thank you for your message! I'll get back to you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
