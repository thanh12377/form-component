import { Fragment, useState } from "react";

const Button = ({ isEditProp , onValid}) => {
  const [isEdit, setIsEdit] = useState(false);
  const onEditHandler = (event) => {
    event.preventDefault();
    setIsEdit(true);
    isEditProp(true);
  };
  const onSaveHandler = (event) => {
    event.preventDefault();
    if(onValid() === true)
    {
        setIsEdit(false);
        isEditProp(false);
    }
  };
  return (
    <Fragment>
      <div className="grid__block full--   ta-c">
        <button
          type="button"
          className={`button secondary-- ${isEdit ? "unshow" : ""}`}
          id="edit"
          onClick={onEditHandler}
        >
          EDIT
        </button>

        <button
          type="submit"
          className={`button ${!isEdit ? "unshow" : ""}`}
          id="submit"
          onClick={onSaveHandler}        >
          SAVE
        </button>
      </div>
    </Fragment>
  );
};

export default Button;
