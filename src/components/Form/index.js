import { Fragment } from "react";
import "./style.scss";
import { useState, useReducer } from "react";
import Input from "../shareComponents/Input";
import Button from "../shareComponents/Button";

const nameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 0 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 0 };
  }
  return { value: "", isValid: false };
};

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValidLength: action.val.trim().length > 0,
      isValid: String(action.val)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValidLength: action.val.trim().length > 0,
      isValid: String(state.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
    };
  }
  return { value: "", isValid: false };
};

const numberReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValidLength: action.val.trim().length > 0,
      isValid: action.val.match(/([0-9]{8})\b/),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValidLength: state.value.trim().length > 0,
      isValid: state.value.match(/([0-9]{8})\b/),
    };
  }
  return { value: "", isValid: false };
};

const notesReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 0 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 0 };
  }
  return { value: "", isValid: false };
};

const Form = (props) => {
  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "John Wick",
    isValid: true,
  });

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "donottake@mydog.com",
    isValidLength: true,
    isValid: true,
  });

  const [numberState, dispatchNumber] = useReducer(numberReducer, {
    value: "0123456789",
    isValidLength: true,
    isValid: true,
  });

  const [genderState, setGenderState] = useState("Male");

  const [noteState, dispatchNote] = useReducer(notesReducer, {
    value:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isValid: true,
  });

  // const [formIsValid, setFormIsValid]  = useState(true);

  const nameChangeHandler = (event) => {
    dispatchName({ type: "USER_INPUT", val: event.target.value });
  };
  const [isEdit, setEdit] = useState(false);

  const validateName = () => {
    dispatchName({ type: "INPUT_BLUR" });
  };
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };
  const validateEmail = () => {
    dispatchNumber({ type: "INPUT_BLUR" });
  };
  const numberChangeHandler = (event) => {
    dispatchNumber({ type: "USER_INPUT", val: event.target.value });
  };
  const validateNumber = () => {
    dispatchNumber({ type: "INPUT_BLUR" });
  };
  const genderChangeHandler = (event) => {
    setGenderState(event.target.value);
    console.log(genderState);
  };
  const noteChangeHanlder = (event) => {
    dispatchNote({ type: "USER_INPUT", val: event.target.value });
  };
  const validateNoteHandler = () => {
    dispatchNote({ type: "INPUT_BLUR" });
  };
  const checkValidHandler = () => {
    if(
      nameState.isValid && emailState.isValid && emailState.isValidLength && numberState.isValid && numberState.isValidLength && genderState !== "" && noteState.isValid) 
    // setFormIsValid(true)
    // else setFormIsValid(false);
    return true
    else return false;
  };
  return (
    <Fragment>
      <main className="main">
        <div className="section">
          <div className="container">
            <form noValidate id="detailsForm" >
              <div className="grid">
                <div className="grid__block">
                  <label>
                    <div
                      className={`field-label`}
                    >
                      Name*
                    </div>

                    <div className={`field-value ${isEdit ? "unshow" : ""}`}>{nameState.value}</div>

                    <Input
                      type="text"
                      className={`field ${
                        !nameState.isValid ? "invalid--" : ""
                      } ${!isEdit ? "unshow" : ""}`}
                      name="name"
                      value={nameState.value}
                      onChange={nameChangeHandler}
                      onBlur={validateName}
                      id="name"
                      disabled = {!isEdit}
                    />

                    <div
                      className={`field-error ${
                        !nameState.isValid ? "active--" : ""
                      }  `}
                      id="nameRequired"
                    >
                      Name is required.
                    </div>
                  </label>
                </div>

                <div className="grid__block">
                  <label>
                    <div className="field-label">E-mail Address*</div>

                    <div className={`field-value ${isEdit ? "unshow" : ""}`}>{emailState.value}</div>

                    <Input
                      type="email"
                      className={`field ${
                        !emailState.isValid ? "invalid--" : ""
                      } ${!isEdit ? "unshow" : ""}`}
                      name="email"
                      value={emailState.value}
                      onChange={emailChangeHandler}
                      onBlur={validateEmail}
                      id="email"
                      disabled = {!isEdit}
                    />

                    <div
                      className={`field-error ${
                        !emailState.isValidLength ? "active--" : ""
                      }`}
                      id="emailRequired"
                    >
                      E-mail Address is required.
                    </div>

                    <div
                      className={`field-error ${
                        emailState.isValidLength && !emailState.isValid
                          ? "active--"
                          : ""
                      }  `}
                      id="emailInvalid"
                    >
                      E-mail Address is invalid.
                    </div>
                  </label>
                </div>

                <div className="grid__block">
                  <label>
                    <div className="field-label">Contact Number*</div>

                    <div className={`field-value ${isEdit ? "unshow" : ""}`}>{numberState.value}</div>

                    <Input
                      type="tel"
                      className={`field ${
                        !numberState.isValidLength || !numberState.isValid
                          ? "invalid--"
                          : ""
                      } ${!isEdit ? "unshow" : ""}`}
                      name="contact"
                      value={numberState.value}
                      onChange={numberChangeHandler}
                      onBlur={validateNumber}
                      id="contact"
                      disabled = {!isEdit}
                    />

                    <div
                      className={`field-error ${
                        !numberState.isValidLength ? "active--" : ""
                      }`}
                      id="contactRequired"
                    >
                      Contact Number is required.
                    </div>

                    <div
                      className={`field-error ${
                        numberState.isValidLength && !numberState.isValid
                          ? "active--"
                          : ""
                      }  `}
                      id="contactInvalid"
                    >
                      Contact Number should consist of 8 to 12 digits only.
                    </div>
                  </label>
                </div>

                <div className="grid__block">
                  <label>
                    <div className="field-label">Gender*</div>

                    <div className={`field-value ${isEdit ? "unshow" : ""}`}>{genderState}</div>

                    <select
                      className={`field ${
                        genderState === "" ? "invalid--" : ""
                      }${!isEdit ? "unshow" : ""}`}
                      name="gender"
                      id="gender"
                      value={genderState}
                      onChange={genderChangeHandler}
                      disabled = {!isEdit}
                    >
                      <option value="">- Select -</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                      <option value="I do not wish to say">
                        I do not wish to say
                      </option>
                    </select>

                    <div
                      className={`field-error ${
                        genderState === "" ? "active--" : ""
                      }`}
                      id="genderRequired"
                    >
                      Gender is required.
                    </div>
                  </label>
                </div>

                <div className="grid__block full--">
                  <label>
                    <div className="field-label">Notes*</div>

                    <div className={`field-value ${isEdit ? "unshow" : ""}`}>
                      {noteState.value}
                    </div>

                    <textarea
                      name="notes"
                      className={`field ${
                        !noteState.isValid ? "invalid--" : ""
                      } ${!isEdit ? "unshow" : ""}`}
                      id="notes"
                      value={noteState.value}
                      onChange={noteChangeHanlder}
                      onBlur={validateNoteHandler}
                      disabled = {!isEdit}
                    ></textarea>

                    <div
                      className={`field-error ${
                        !noteState.isValid ? "active--" : ""
                      }  `}
                      id="notesRequired"
                    >
                      Notes is required.
                    </div>
                  </label>
                </div>
                <Button isEditProp={setEdit} onValid = {checkValidHandler} />
              </div>
            </form>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Form;
