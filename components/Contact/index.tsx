import React, { useRef, useState } from "react";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SectionContext } from "../../context/LinkContext";
import { useContext } from "react";

import styles from "./styles.module.css";

const Contact: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { getInTouchRef } = useContext(SectionContext);

  const notify = () => toast("Email was successfully sent");

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      email,
      message,
      to_name: "Chris",
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY || ""
      )
      .then(
        (result) => {
          notify();
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main ref={getInTouchRef}>
      <h2 className={styles.title}>Get In Touch!</h2>
      <form
        onSubmit={sendEmail}
        ref={form}
        className={styles.message_submit_container}
      >
        <div className={styles.footer_container}>
          <div className={styles.message_container}>
            <div className={styles.email_container}>
              <label
                htmlFor="exampleFormControlInput1"
                className={styles.form_label}
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className={`form-control ${styles.email_input}`}
                type="email"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className={styles.message}>
              <label htmlFor="exampleFormControlTextarea1">Message</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                id="exampleFormControlTextarea1"
                placeholder="Add message here"
                className={`${styles.textarea} form-control`}
              ></textarea>
              <button type="submit" className={styles.submit_btn}>
                Get in touch
              </button>
              <ToastContainer className={styles.toastify_content} />
            </div>
          </div>
        </div>
      </form>
      <div className={styles.contact_container}>
        <div className={styles.email_phone_container}>
          <p>
            <AiFillMail size="1.5em" />
          </p>
          <p>
            <a
              className={styles.contact_hover}
              href="mailto:chrisdietrichdev@gmail.com"
            >
              chrisdietrichdev@gmail.com
            </a>
          </p>
        </div>
        <div className={styles.email_phone_container}>
          <p>
            <AiFillPhone size="1.5em" />
          </p>
          <a
            className={styles.contact_hover}
            href="tel:+4436083258"
            target="_blank"
            rel="noopener noreferrer"
          >
            (240) 814-4208
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
