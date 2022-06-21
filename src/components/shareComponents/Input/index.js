

const Input = (props) => {
  return (
    <input
      type={props.type}
      className={props.className}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      id={props.id}
      disabled = {props.disabled}
    />
  );
};

export default Input;
