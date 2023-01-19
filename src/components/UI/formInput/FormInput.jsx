export const FormInput = (props) => {
  return (
    <div>
      <label htmlFor="name">{props.labelName}</label>
      <input
        placeholder={props.placeholder || "Введите"}
        id="name"
        type={props.InputType}
      />
    </div>
  );
};
