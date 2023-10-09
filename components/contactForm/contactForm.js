import { useState } from "react";
export default function ContactForm({ translation }) {
  // console.log(translation);
  const [inputs, setInputs] = useState({
    // state per le inputs normali
    name: "",
    work: "",
    email: "",
    message: "",
  });

  const [checkboxesState, setCheckboxesState] = useState({
    // state per le chackboxes
    logo: false,
    label: false,
    branding: false,
    social: false,
    altro: false,
  });

  const [form, setForm] = useState("");
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [clickedRadio, setClickedRadio] = useState(null);

  function onChangeValue(e) {
    const checkboxValue = e.target.value;
    // console.log(checkboxValue);
    setCheckboxesState((prevState) => ({
      ...prevState,
      [checkboxValue]: !prevState[checkboxValue],
    }));
  }

  function handleRadioChange(radioValue) {
    setSelectedRadio(radioValue);
  }

  function handleClickedRadioChange(radioValue) {
    setClickedRadio(radioValue);
  }

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (inputs.name && inputs.work && inputs.email && inputs.message) {
      setForm({ state: "loading" });
      try {
        const formData = {
          ...inputs,
          source: selectedRadio, // Valore della radio selezionata
          price: clickedRadio,
          services: Object.keys(checkboxesState).filter(
            (key) => checkboxesState[key]
          ), // Array dei servizi selezionati
        };

        const res = await fetch(`api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
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
          work: "",
          email: "",
          message: "",
        });
        setSelectedRadio(null); // Resetta la radio selezionata
        setClickedRadio(null);
        setCheckboxesState({
          logo: false,
          label: false,
          branding: false,
          social: false,
          altro: false,
        }); // Resetta le checkbox selezionate
      } catch (error) {
        setForm({
          state: "Errore",
          message: "Qualcosa è andato storto",
        });
      }
    }
  };

  return (
    <section className="w-full h-full ">
      <div className="container mx-auto w-full">
        <div className="contact-form__form">
          <form onSubmit={(e) => onSubmitForm(e)}>
            <div className="contact-form__row">
              <span className="contact-form__text text-black heading-l">
                Ciao! Mi chiamo
              </span>
              <input
                id="name"
                className="contact-form__input text-l text-m_sm contact-form__input_pinched"
                placeholder="Type your name*"
                type="text"
                required
                value={inputs.name}
                onChange={handleChange}
                data-invalid="false"
                name="name"
              />

              <span className="contact-form__text text-black heading-l">
                e il mio brand è
              </span>
              <input
                id="work"
                className="contact-form__input text-l text-m_sm contact-form__input_right"
                placeholder="Type a company name*"
                type="text"
                required
                value={inputs.work}
                onChange={handleChange}
                data-invalid="false"
                data-filled="false"
                name="work"
              />
            </div>
            <div className="contact-form__row">
              <span className="contact-form__text text-black heading-l">
                Ti ho trovata usando
              </span>
              <div className="contact-form__items">
                <label
                  className={`radio ${
                    selectedRadio === "passaparola" ? "checked" : ""
                  }`}
                  data-checked={selectedRadio === "passaparola"}
                  data-invalid="false"
                >
                  <input
                    id="passaparola"
                    className="radio__input"
                    type="radio"
                    name="source"
                    value="passaparola"
                    onChange={() => handleRadioChange("passaparola")}
                    checked={selectedRadio === "passaparola" ? "checked" : ""}
                  />
                  <span className="radio__label no-select text-m">
                    Passaparola
                  </span>
                </label>
                <label
                  className={`radio ${
                    selectedRadio === "face" ? "checked" : ""
                  }`}
                  data-checked={selectedRadio === "face"}
                  data-invalid="false"
                >
                  <input
                    id="facebook"
                    className="radio__input"
                    type="radio"
                    name="source"
                    value="facebook"
                    onChange={() => handleRadioChange("face")}
                    checked={selectedRadio === "face"}
                  />
                  <span className="radio__label no-select text-m">
                    Facebook
                  </span>
                </label>
                <label
                  className={`radio ${
                    selectedRadio === "insta" ? "checked" : ""
                  }`}
                  data-checked={selectedRadio === "insta"}
                  data-invalid="false"
                >
                  <input
                    id="instagram"
                    className="radio__input"
                    type="radio"
                    name="source"
                    value="instagram"
                    onChange={() => handleRadioChange("insta")}
                    checked={selectedRadio === "insta"}
                  />
                  <span className="radio__label no-select text-m">
                    Instagram
                  </span>
                </label>
                <label
                  className={`radio ${
                    selectedRadio === "google" ? "checked" : ""
                  }`}
                  data-checked={selectedRadio === "google"}
                  data-invalid="false"
                >
                  <input
                    id="google"
                    className="radio__input"
                    type="radio"
                    name="source"
                    value="google"
                    onChange={() => handleRadioChange("google")}
                    checked={selectedRadio === "google"}
                  />
                  <span className="radio__label no-select text-m">
                    Google Search
                  </span>
                </label>

                <label
                  className={`radio ${
                    selectedRadio === "linkedin" ? "checked" : ""
                  }`}
                  data-checked={selectedRadio === "linkedin"}
                  data-invalid="false"
                >
                  <input
                    id="linkedin"
                    className="radio__input"
                    type="radio"
                    name="source"
                    value="linkedin"
                    onChange={() => handleRadioChange("linkedin")}
                    checked={selectedRadio === "linkedin"}
                  />
                  <span className="radio__label no-select text-m">
                    Linkedin
                  </span>
                </label>
              </div>
            </div>
            <div className="contact-form__row">
              <span className="contact-form__text text-main heading-l">
                Ho bisogno di aiuto con:
              </span>
              <div className="contact-form__items">
                <label
                  className={`pill-checkbox ${
                    checkboxesState.logo ? "checked" : ""
                  }`}
                  data-checked={checkboxesState.logo}
                  data-invalid="false"
                >
                  <input
                    className="pill-checkbox__input"
                    type="checkbox"
                    name="service"
                    value="logo"
                    onClick={onChangeValue}
                  />
                  <span className="pill-checkbox__label no-select text-m">
                    Logo Design
                  </span>
                </label>
                <label
                  className={`pill-checkbox ${
                    checkboxesState.label ? "checked" : ""
                  }`}
                  data-checked={checkboxesState.label}
                  data-invalid="false"
                >
                  <input
                    className="pill-checkbox__input"
                    type="checkbox"
                    name="service"
                    value="label"
                    onClick={onChangeValue}
                  />
                  <span className="pill-checkbox__label no-select text-m">
                    Label Design
                  </span>
                </label>
                <label
                  className={`pill-checkbox ${
                    checkboxesState.branding ? "checked" : ""
                  }`}
                  data-checked={checkboxesState.branding}
                  data-invalid="false"
                >
                  <input
                    className="pill-checkbox__input"
                    type="checkbox"
                    name="service"
                    value="branding"
                    onClick={onChangeValue}
                  />
                  <span className="pill-checkbox__label no-select text-m">
                    Branding
                  </span>
                </label>
                <label
                  className={`pill-checkbox ${
                    checkboxesState.social ? "checked" : ""
                  }`}
                  data-checked={checkboxesState.social}
                  data-invalid="false"
                >
                  <input
                    className="pill-checkbox__input"
                    type="checkbox"
                    name="service"
                    value="social"
                    onClick={onChangeValue}
                  />
                  <span className="pill-checkbox__label no-select text-m">
                    Social Media
                  </span>
                </label>
                <label
                  className={`pill-checkbox ${
                    checkboxesState.altro ? "checked" : ""
                  }`}
                  data-checked={checkboxesState.altro}
                  data-invalid="false"
                >
                  <input
                    className="pill-checkbox__input"
                    type="checkbox"
                    name="service"
                    value="altro"
                    onClick={onChangeValue}
                  />
                  <span className="pill-checkbox__label no-select text-m">
                    Altro
                  </span>
                </label>
              </div>
            </div>
            <div className="contact-form__row">
              <span className="contact-form__text text-black heading-l">
                Vorrei restare attorno
              </span>
              <div className="contact-form__items">
                <label
                  className={`radio ${
                    clickedRadio === "€ 350 - 500" ? "checked" : ""
                  }`}
                  data-checked={clickedRadio === "€ 350 - 500"}
                  data-invalid="false"
                >
                  <input
                    id="€ 350 - 500"
                    className="radio__input"
                    type="radio"
                    name="source"
                    value=" € 350 - 500"
                    onChange={() => handleClickedRadioChange("€ 350 - 500")}
                    checked={clickedRadio === "€ 350 - 500"}
                  />
                  <span className="radio__label no-select text-m">
                    € 350 - 500
                  </span>
                </label>
                <label
                  className={`radio ${
                    clickedRadio === "€ 500 - 1,500" ? "checked" : ""
                  }`}
                  data-checked={clickedRadio === "€ 500 - 1,500"}
                  data-invalid="false"
                >
                  <input
                    id="medio"
                    className="radio__input"
                    type="radio"
                    name="source"
                    value="€ 500 - 1,500"
                    onChange={() => handleClickedRadioChange("€ 500 - 1,500")}
                    checked={clickedRadio === "€ 500 - 1,500"}
                  />
                  <span className="radio__label no-select text-m">
                    € 500 - 1,500
                  </span>
                </label>
                <label
                  className={`radio ${
                    clickedRadio === "€ 1,500 - 2,500" ? "checked" : ""
                  }`}
                  data-checked={clickedRadio === "€ 1,500 - 2,500"}
                  data-invalid="false"
                >
                  <input
                    id="€ 1,500 - 2,500"
                    className="radio__input"
                    type="radio"
                    name="source"
                    value=" € 1,500 - 2,500"
                    onChange={() => handleClickedRadioChange("€ 1,500 - 2,500")}
                    checked={clickedRadio === "€ 1,500 - 2,500"}
                  />
                  <span className="radio__label no-select text-m">
                    € 1,500 - 2,500
                  </span>
                </label>
                <label
                  className={`radio ${
                    clickedRadio === "2,500+" ? "checked" : ""
                  }`}
                  data-checked={clickedRadio === "2,500+"}
                  data-invalid="false"
                >
                  <input
                    id="2,500+"
                    className="radio__input"
                    type="radio"
                    name="source"
                    value="2,500+"
                    onChange={() => handleClickedRadioChange("2,500+")}
                    checked={clickedRadio === "2,500+"}
                  />
                  <span className="radio__label no-select text-m">
                    € 2,500 +
                  </span>
                </label>
              </div>
            </div>
            <div className="contact-form__row">
              <span className="contact-form__text text-black heading-l">
                Non esitare a contattarmi su
              </span>
              <input
                id="email"
                data-invalid="false"
                data-filled="false"
                className="contact-form__input text-l text-m_sm contact-form__input_pinched contact-form__input_pinched_t"
                name="email"
                placeholder="Type your esempio@email.com*"
                type="email"
                value={inputs.email}
                onChange={handleChange}
                required
              />
              <span className="contact-form__text text-black heading-l">
                per cominciare a parlarne
              </span>
            </div>
            <div className="contact-form__textarea-wrapper">
              <div>
                <span className="contact-form__text text-black heading-l">
                  Mi piacerebbe condividere maggiori dettagli sul mio progetto:
                </span>
              </div>
              <div>
                <textarea
                  id="message"
                  className="contact-form__textarea text-l text-m_sm contact-form__input_wide"
                  placeholder="Type project details*"
                  rows="1"
                  onChange={handleChange}
                  value={inputs.message}
                  required
                ></textarea>
              </div>
            </div>
            <div className="contact-form__footer no-select">
              <button
                className="contact-form__btn button text-m button_primary_dark"
                type="submit"
              >
                <span className="button__content">
                  <span className="button__text text-lg py-2 px-12 2xl:text-xl 3xl:text-3xl text-white font-bold">
                    Invia
                  </span>
                </span>
                {form.state === "loading" ? (
                  <span className="button__loader text-main">Sending...</span>
                ) : form.state === "error" ? (
                  <span className="button__error">Try again...</span>
                ) : (
                  form.state === "success" && (
                    <span className="button__success">Done!</span>
                  )
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
