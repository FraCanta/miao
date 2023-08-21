import React from "react";
import { useState } from "react";

const ContactForm = ({ translation }) => {
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    project_type: "Non Specificato",
    service_type: "Non Specificato",
    message: "",
  });

  const [form, setForm] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (
      inputs.name &&
      inputs.surname &&
      inputs.email &&
      inputs.phone &&
      inputs.project_type &&
      inputs.message
    ) {
      setForm({ state: "loading" });
      try {
        const res = await fetch(`api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        });

        const { error } = await res.json();

        if (error) {
          setForm({
            state: "error",
            message: error,
          });
          return;
        }

        setForm({
          state: "Fatto",
          message:
            "Il tuo messaggio è stato inviato. Grazie per averci contattato!",
        });
        setInputs({
          name: "",
          email: "",
          message: "",
          surname: "",
          phone: "",
          project_type: "",
          service_type: "",

          message: "",
        });
      } catch (error) {
        setForm({
          state: "Errore ",
          message: "Qualcosa è andato storto",
        });
      }
    }
  };
  return (
    <section className="contact_form  w-full 2xl:w-[90%] h-full gap-20">
      <div className="container mx-auto w-full ">
        <div className="content_wrapper grid grid-cols-1 ">
          <div className="contact_wrapper ">
            <form
              className=" flex flex-col  mx-auto rounded-lg p-2 md:p-4"
              onSubmit={(e) => onSubmitForm(e)}
            >
              <div className="flex flex-wrap md:flex-nowrap name_surname_wrapper">
                <div className="label_wrapper flex flex-col w-full md:mr-4 gap-[15px]">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={inputs.name}
                    onChange={handleChange}
                    className="inputField w-full p-3 bg-second/20  text-main text-sm 3xl:text-4xl  focus:ring-white focus:border-white block"
                    placeholder="Mario"
                    required
                  />
                </div>
                <div className="label_wrapper flex flex-col w-full gap-[15px]">
                  <label htmlFor="surname" className="mt-4 md:mt-0 ">
                    Surname
                  </label>
                  <input
                    id="surname"
                    type="text"
                    value={inputs.surname}
                    onChange={handleChange}
                    className="inputField w-full p-3 bg-second/20  text-main text-sm 3xl:text-4xl  focus:ring-white focus:border-white block"
                    placeholder="Rossi"
                    required
                  />
                </div>
              </div>

              <div className="email_phone_wrapper flex flex-wrap md:flex-nowrap mt-4 3xl:mt-16">
                <div className="label_wrapper flex flex-col w-full gap-[15px]">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={inputs.email}
                    onChange={handleChange}
                    className="inputField w-full p-3 bg-second/20  text-pink text-sm 3xl:text-4xl rounded focus:ring-pink focus:border-pink block"
                    placeholder="esempio@email.com"
                    required
                  />
                </div>
                {/* <div className="label_wrapper flex flex-col w-full ">
                  <label htmlFor="phone" className="mt-4 md:mt-0"></label>
                  <input
                    id="phone"
                    type="tel"
                    value={inputs.phone}
                    onChange={handleChange}
                    className="inputField w-full p-3 bg-transparent border-b  text-pink text-sm 3xl:text-4xl rounded focus:ring-pink focus:border-pink block"
                    placeholder="33XXXXXXXX"
                    required
                  />
                </div> */}
              </div>
              {/* <div className="label_wrapper flex flex-col mt-6 3xl:mt-16 w-full text-base 3xl:text-4xl text-pink">
                <label htmlFor="project_type ">{translation?.question1}</label>
                <select
                  value={inputs.project_type}
                  onChange={handleChange}
                  name="project_type"
                  id="project_type"
                  className="inputField w-full p-3 bg-transparent border-b  text-pink text-sm 3xl:text-3xl rounded block mt-4 3xl:mt-6"
                >
                  <option value="Non Specificato">Seleziona...</option>
                  <option value="Startup">Startup</option>
                  <option value="App">App</option>
                  <option value="Applicativo">Applicativo</option>
                  <option value="Sito istituzionale">Sito istituzionale</option>
                  <option value="Sito automotive">Automotive</option>
                  <option value="Sito Wedding">Wedding</option>
                </select>
              </div> */}

              <div className="label_wrapper flex flex-col mt-6 3xl:mt-16 w-full text-base 3xl:text-4xl text-main">
                <label htmlFor="service_type ">Quale servizio scegli?</label>
                <select
                  value={inputs.service_type}
                  onChange={handleChange}
                  name="service_type"
                  id="service_type"
                  className="inputField w-full p-3 border border-second/30 bg-white  text-main text-sm  3xl:text-3xl  block mt-4 3xl:mt-6"
                >
                  <option value="Non Specificato">Seleziona...</option>
                  <option value="Tailored Site">Tailored Site</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Prototype with Figma">
                    Prototype with Figma
                  </option>
                  <option value="Restyling">Restyling</option>
                </select>
              </div>
              <div className="label_wrapper flex flex-col mt-6 3xl:mt-16 gap-[15px]">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  type="text"
                  value={inputs.message}
                  onChange={handleChange}
                  className="inputField p-3 bg-second/20 text-main text-sm 3xl:text-3xl  block !text-pink"
                  placeholder="Descrivi brevemente il tuo progetto"
                  rows="5"
                  required
                />
              </div>
              <input
                type="submit"
                className="button p-3 cursor-pointer capitalize bg-main text-white font-bold mt-4 text-[18px] md:text-[24px] 3xl:text-4xl"
              />
              {form.state === "loading" ? (
                <div>Invio in corso....</div>
              ) : form.state === "error" ? (
                <div>{form.message}</div>
              ) : (
                form.state === "success" && (
                  <div className="text-pink">
                    Inviato correttamente, grazie per averci contattato.
                  </div>
                )
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
