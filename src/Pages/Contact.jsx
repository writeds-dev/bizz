import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  phone: Yup.string()
    .matches(/^\+?\d{7,15}$/, "Enter a valid phone number")
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  message: Yup.string().required("Message cannot be empty"),
});

export default function ContactModern() {
  const sendEmail = (values, resetForm, setSubmitting) => {
    const serviceID = "service_w6su2vu";
    const templateID = "template_mostscd";
    const userID = "i7jZWU0Yp3d1DfaFb";

    const templateParams = {
      first_name: values.firstName,
      last_name: values.lastName,
      phone: values.phone,
      email: values.email,
      message: values.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(
        (response) => {
          toast.success("Message sent successfully!");
          resetForm();
          setSubmitting(false);
          console.log("Email sent", response.status, response.text);
        },
        (error) => {
          toast.error("Failed to send message, please try again.");
          setSubmitting(false);
          console.error("Email error", error);
        }
      );
  };

  return (
    <section className="bg-gradient-to-tr from-black via-gray-900 to-black text-white py-20 px-4 sm:px-10 min-h-screen">
      <ToastContainer position="top-right" autoClose={4000} />
      <div className="max-w-full mx-auto relative text-center md:text-left mb-16 px-4 sm:px-0">
        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight relative inline-block max-w-4xl mx-auto md:mx-0">
          Connect{" "}
          <span
            className="text-transparent bg-clip-text font-extrabold animate-gradient-x"
            style={{
              backgroundImage: `linear-gradient(90deg, #A3E635, #7CBF00, #A3E635)`,
            }}
          >
            Bizz
          </span>
          <br />
          With our{" "}
          <span
            className="italic text-transparent bg-clip-text font-extrabold animate-gradient-x"
            style={{
              backgroundImage: `linear-gradient(90deg, #A3E635, #7CBF00, #A3E635)`,
            }}
          >
            team
          </span>
        </h1>

        {/* Underline Accent */}
        <div
          className="mt-3 h-1 w-32 rounded-full mx-auto md:mx-0"
          style={{
            background: "linear-gradient(90deg, #A3E635, #7CBF00, #A3E635)",
          }}
        ></div>

        {/* Subtext */}
        <p className="mt-10 max-w-xl mx-auto md:mx-0 text-base sm:text-lg text-gray-300 leading-relaxed tracking-wide">
          Transforming ideas into reality. Crafting the digital future, one design at a time. Shaping tomorrow, today. Designing digital futures with innovation and precision.
        </p>

        {/* Animation keyframes */}
        <style>{`
          @keyframes gradient-x {
            0%, 100% {
              background-position: 0% center;
            }
            50% {
              background-position: 100% center;
            }
          }
          .animate-gradient-x {
            background-size: 200% 100%;
            animation: gradient-x 4s ease infinite;
          }
        `}</style>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h4 className="text-sm font-semibold text-lime-400 uppercase tracking-wide">Contact Us</h4>
          <h2 className="text-5xl font-bold leading-tight">
            Let’s build <span className="text-lime-400">something great</span> together
          </h2>
          <p className="text-gray-400 text-lg">
            We’re just one message away. Get in touch and let us help bring your ideas to life.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-base">
            <div className="flex items-center space-x-3">
              <span className="text-lime-400" aria-label="Email">
                📧
              </span>
              <span>Be4bizzofficial@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              sendEmail(values, resetForm, setSubmitting);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full">
                    <Field
                      name="firstName"
                      placeholder="First name"
                      className="w-full bg-black/40 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none"
                      aria-label="First name"
                    />
                    <ErrorMessage name="firstName" component="div" className="text-red-400 text-sm mt-1" />
                  </div>
                  <div className="w-full">
                    <Field
                      name="lastName"
                      placeholder="Last name"
                      className="w-full bg-black/40 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none"
                      aria-label="Last name"
                    />
                    <ErrorMessage name="lastName" component="div" className="text-red-400 text-sm mt-1" />
                  </div>
                </div>

                <Field
                  name="phone"
                  placeholder="Mobile number"
                  className="w-full bg-black/40 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none"
                  aria-label="Mobile number"
                />
                <ErrorMessage name="phone" component="div" className="text-red-400 text-sm mt-1" />

                <Field
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-black/40 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none"
                  aria-label="Email address"
                />
                <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />

                <Field
                  as="textarea"
                  name="message"
                  placeholder="Write your message..."
                  rows="4"
                  className="w-full bg-black/40 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none"
                  aria-label="Message"
                />
                <ErrorMessage name="message" component="div" className="text-red-400 text-sm mt-1" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-lime-400 hover:bg-lime-300 text-black font-semibold py-3 rounded-full transition-all duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
