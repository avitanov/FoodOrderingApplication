import { useState } from "react";
import PhoneInput, {
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
const isAlpha = (str) => /^[a-zA-Z\s]*$/.test(str);
const CheckoutInput = (props) => {
  const isChecked = props.isChecked;
  const [firstName, setFirstName] = useState("");
  const [wrongFirstInput, setWrongFirstInput] = useState(false);
  const [emptyFirstInput, setEmptyFirstInput] = useState(false);
  const firstNameHandler = (event) => {
    setEmptyFirstInput(false);
    setFirstName(event.target.value);
    if (isAlpha(event.target.value)) {
      setWrongFirstInput(false);
    } else {
      setWrongFirstInput(true);
    }
  };

  const [lastName, setLastName] = useState("");
  const [wrongLastInput, setWrongLastInput] = useState(false);
  const [emptyLastInput, setEmptyLastInput] = useState(false);
  const lastNameHandler = (event) => {
    setEmptyLastInput(false);
    setLastName(event.target.value);
    if (isAlpha(event.target.value)) {
      setWrongLastInput(false);
    } else {
      setWrongLastInput(true);
    }
  };
  const [email, setEmail] = useState("");
  const [wrongEmailInput, setWrongEmail] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const emailHandler = (event) => {
    setEmptyEmail(false);
    setWrongEmail(false);
    setEmail(event.target.value);
  };

  const [country, setCountry] = useState("");
  const [wrongCountryInput, setWrongCountry] = useState(false);
  const [emptyCountry, setEmptyCountry] = useState(false);
  const CountryHandler = (event) => {
    setEmptyCountry(false);
    setCountry(event.target.value);
    if (isAlpha(event.target.value)) {
      setWrongCountry(false);
    } else {
      setWrongCountry(true);
    }
  };
  const [city, setCity] = useState("");
  const [wrongCityInput, setWrongCity] = useState(false);
  const [emptyCity, setEmptyCity] = useState(false);
  const cityHandler = (event) => {
    setEmptyCity(false);
    setCity(event.target.value);
    if (isAlpha(event.target.value)) {
      setWrongCity(false);
    } else {
      setWrongCity(true);
    }
  };
  const [adress, setAddress] = useState("");
  const [emptyAddress, setEmptyAddress] = useState(false);
  const adressHandler = (event) => {
    setEmptyAddress(false);
    setAddress(event.target.value);
  };

  const [postalCode, setPostalCode] = useState("");
  const [emptyPostalCode, setEmptyPostal] = useState(false);
  const postalCodeHandler = (event) => {
    setEmptyPostal(false);
    setPostalCode(event.target.value);
  };

  const [phoneNumberValue, setPhoneNumberValue] = useState(undefined);
  const [emptyPhoneNumber, setEmptyPhoneNumber] = useState(false);
  const phoneNumberHandler = (value) => {
    setEmptyPhoneNumber(false);
    document.documentElement.style.setProperty(
      "--border-width",
      "2px"
    );
    document.documentElement.style.setProperty(
      "--custom-border-color",
      "#4AA05A"
    );
    setPhoneNumberValue(value);
  };

  const checkHandler = () => {
    let sign = true;
    if (firstName.length === 0) {
      setEmptyFirstInput(true);
      sign = false;
    }
    if (lastName.length === 0) {
      setEmptyLastInput(true);
      sign = false;
    }
    if (email.length == 0) {
      setEmptyEmail(true);
      sign = false;
    } else if (!email.includes("@") || !email.includes(".com")) {
      setWrongEmail(true);
      sign = false;
    }
    if (country.length === 0) {
      setEmptyCountry(true);
      sign = false;
    }
    if (city.length === 0) {
      setEmptyCity(true);
      sign = false;
    }
    if (adress.length === 0) {
      setEmptyAddress(true);
      sign = false;
    }
    if (postalCode === "") {
      setEmptyPostal(true);
      sign = false;
    }
    if (phoneNumberValue === undefined) {
      setEmptyPhoneNumber(true);
      document.documentElement.style.setProperty(
        "--border-width",
        "2px"
      );
      document.documentElement.style.setProperty(
        "--custom-border-color",
        "rgb(248,64,38)"
      );
      sign = false;
    }
    if (!isValidPhoneNumber(phoneNumberValue)) {
      document.documentElement.style.setProperty(
        "--border-width",
        "2px"
      );
      document.documentElement.style.setProperty(
        "--custom-border-color",
        "rgb(248,64,38)"
      );
      sign - false;
    }
    return sign;
  };

  const clearInputs = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setCity("");
    setCountry("");
    setAddress("");
    setPostalCode("");
    setPhoneNumberValue("");
  };
  const submitHandler = (event) => {
    event.preventDefault();
    let sign = checkHandler();
    if (sign) {
      props.submitOrder({
        name: firstName + ' '+ lastName,
        email,
        country,
        city,
        postalCode,
        adress,
        phoneNumber: phoneNumberValue,
      });
      // clearInputs();
    }
  };
  return (
    <div
      className={`  absolute  top-6 w-screen transition-transform duration-700 py-4 ${
        isChecked ? "translate-x-0 " : "translate-x-full"
      }
      ${props.finalCheck ? "translate-x-[-200%]" : "translate-x-0"}
      `}
    >
      <form
        className="bg-white shadow-lg w-[90%] mx-auto rounded-lg  sm:pt-6 pt-10 pb-4 px-8"
        onSubmit={submitHandler}
      >
        <h2 className="pb-6 font-semibold text-black text-center text-[1.5rem]">
          Contact Details
        </h2>
        <div className="grid md:grid-cols-2 gap-6 pb-3 md:pl-[4%]  ">
          <div>
            <label className="w-full text-xl text-third font-semibold">
              First Name
            </label>
            <input
              type="text"
              className={`block md:w-[90%] w-full px-3 py-1.5 rounded-sm mt-1.5 border-b-2 border-[#4AA05A] focus:outline-none${
                wrongFirstInput || emptyFirstInput
                  ? " border-b-2 border-primary"
                  : ""
              }`}
              placeholder="First Name"
              onChange={firstNameHandler}
              value={firstName}
            />
            {wrongFirstInput && <p>Name must contain letters only!</p>}
            {emptyFirstInput && <p>Enter your First Name!</p>}
          </div>
          <div>
            <label className="w-full text-xl text-third font-semibold">
              Last Name
            </label>
            <input
              type="text"
              className={`block md:w-[90%] w-full px-3 py-1.5 rounded-sm mt-1.5 border-b-2 border-[#4AA05A] focus:outline-none${
                wrongLastInput || emptyLastInput
                  ? " border-b-2 border-primary"
                  : ""
              }`}
              placeholder="Last Name"
              onChange={lastNameHandler}
              value={lastName}
            />
            {wrongLastInput && <p>Name must contain letters only!</p>}
            {emptyLastInput && <p>Enter your Last Name!</p>}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 pb-3 md:pl-[4%] mt-[0.75rem]">
          <div>
            <label className="w-full text-xl text-third font-semibold">
              Phone Number
            </label>
            <div className="w-full md:w-[90%] mt-1.5">
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="MK"
                value={phoneNumberValue}
                onChange={phoneNumberHandler}
              />
              {phoneNumberValue &&
              (!isPossiblePhoneNumber(phoneNumberValue) ||
                !isValidPhoneNumber(phoneNumberValue)) ? (
                <p>Number must be valid!</p>
              ) : (
                ""
              )}
              {emptyPhoneNumber && <p>Enter a phone number!</p>}
            </div>
          </div>
          <div>
            <label className="w-full text-xl text-third font-semibold">
              E-mail
            </label>
            <input
              type="text"
              className={`block md:w-[90%] w-full px-3 py-1.5 rounded-sm mt-1.5 border-b-2 border-[#4AA05A] focus:outline-none${
                wrongEmailInput || emptyEmail ? " border-b-2 border-primary" : ""
              }`}
              placeholder="E-mail"
              onChange={emailHandler}
              value={email}
            />
            {wrongEmailInput && <p>Enter a valid Mail!</p>}
            {emptyEmail && <p>Enter your Mail!</p>}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 pb-3 md:pl-[4%]">
          <div>
            <label className="w-full text-xl text-third font-semibold">
              Country
            </label>
            <input
              type="text"
              className={`block md:w-[90%] w-full px-3 py-1.5 rounded-sm mt-1.5 border-b-2 border-[#4AA05A] focus:outline-none${
                wrongCountryInput || emptyCountry
                  ? " border-b-2 border-primary"
                  : ""
              }`}
              placeholder="Country"
              onChange={CountryHandler}
              value={country}
            />
            {wrongCountryInput && <p>Name must contain letters only!</p>}
            {emptyCountry && <p>Enter your Country!</p>}
          </div>
          <div>
            <label className="w-full text-xl text-third font-semibold">
              City
            </label>
            <input
              type="text"
              className={`block md:w-[90%] w-full px-3 py-1.5 rounded-sm mt-1.5 border-b-2 border-[#4AA05A] focus:outline-none${
                wrongCityInput || emptyCity ? " border-b-2 border-primary" : ""
              }`}
              placeholder="City"
              onChange={cityHandler}
              value={city}
            />
            {wrongCityInput && <p>Name must contain letters only!</p>}
            {emptyCity && <p>Enter your City!</p>}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 pb-3 md:pl-[4%]">
          <div>
            <label className="w-full text-xl text-third font-semibold">
              Address
            </label>
            <input
              type="text"
              className={`block md:w-[90%] w-full px-3 py-1.5 rounded-sm mt-1.5 border-b-2 border-[#4AA05A] focus:outline-none${
                emptyAddress ? " border-b-2 border-primary" : ""
              }`}
              placeholder="Address"
              value={adress}
              onChange={adressHandler}
            />
            {emptyAddress && <p>Enter your Address!</p>}
          </div>
          <div>
            <label className="w-full text-xl text-third font-semibold">
              Postal Code
            </label>
            <input
              type="number"
              className={`block md:w-[90%] w-full px-3 py-1.5 rounded-sm mt-1.5 border-b-2 border-[#4AA05A] focus:outline-none${
                emptyPostalCode ? " border-b-2 border-primary" : ""
              }`}
              placeholder="Postal Code"
              value={postalCode}
              onChange={postalCodeHandler}
            />
            {emptyPostalCode && <p>Enter your Postal Code!</p>}
          </div>
        </div>
        <div className="md:px-[4%] mx-auto md:flex md:justify-between md:flex-row-reverse py-2 mt-2">
          <button
            className="font-normal transition-colors duration-200  md:w-[20%] md:min-w-[11rem] w-full py-1 rounded-md bg-[#4AA05A] text-white  hover:bg-third"
            type="submit"
          >
            Submit
          </button>
          <button
            className="bg-[#F5F7FF] transition-colors duration-200  font-normal text-primary md:w-[20%] md:min-w-[11rem] w-full py-1 rounded-md hover:bg-primary hover:text-white mt-4 md:mt-0"
            onClick={props.cancelOrder}
          >
            Cancel Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutInput;
