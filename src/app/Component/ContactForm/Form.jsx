import React, { useRef, useState } from "react";
import "../../Style/Foorm.css";
import emailjs from "@emailjs/browser";

function Form() {
  const form = useRef();
  const [formData, setFormData] = useState({
    First_name: "",
    last_name: "",
    Company: "",
    jobTitle: "",
    Email: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7jxestm",
        "template_u14mj46",
        form.current,
        "d9R2jjcnVFeuu1PLz"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear form values after successful submission
          setFormData({
            First_name: "",
            last_name: "",
            Company: "",
            jobTitle: "",
            Email: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="formMainDiv pb-20">
      <div className="flex justify-center">
        <div>
          <h1 className="formTitle">Get In Touch</h1>
          <p className="formPara mb-9">
            We are excited to provide you solutions!
          </p>
        </div>
      </div>

      <div class="rowform ">
        <div className="column1">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex"
            id="contact-form"
          >
            <div className="fromInSideDiv">
              <input
                type="text"
                id="name"
                name="First_name"
                className="firstnamebox"
                placeholder="First Name*"
                value={formData.First_name}
                onChange={handleChange}
              />

              <br></br>

              <input
                type="text"
                id="last_Name"
                name="last_name"
                placeholder="Last Name*"
                value={formData.last_name}
                onChange={handleChange}
              />

              <br></br>

              <input
                type="text"
                id="number"
                name="Company"
                placeholder="Company"
                value={formData.Company}
                onChange={handleChange}
              />

              <br></br>

              <input
                type="text"
                placeholder="Job Title*"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
              />

              <br></br>

              <input
                type="email"
                placeholder="Email Address**"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
              />

              <br></br>

              <div className="ml-16 mt-7">
                <input type="checkbox" id="scales" name="scales" />
                <label for="scales" className="labePrivacyPolicy">
                  I agree to the privacy policy.
                </label>
              </div>

              <div className="ml-16 mt-2 ">
                <input type="checkbox" id="horns" name="horns" />
                <label for="horns" className="labelSubscriveForm">
                  Subscribe me to Paperfold’s latest thought leadership, blogs
                  and updates.
                </label>
              </div>

              <input
                type="submit"
                value="Send"
                className="ml-16 submitFormBtn"
              />
            </div>
            {/* form 2nd div */}
            <div className="column2">
              <img className="formimg" src="./formImg.png" alt="form-img" />

              <textarea
                id="w3review"
                name="w3review"
                rows="10"
                cols="50"
                placeholder="How can we help you?"
                className="textareaform"
              ></textarea>
              <p className="textareaformtext">
                You can also email us directly at support@paperfold.in
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
