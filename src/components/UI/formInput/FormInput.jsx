const FormInput = ({id,labelName, placeholder, priceinputType,...rest}) => {
 
  return (
    <div>
      <label htmlFor={id}>{labelName}</label>
      <input placeholder={placeholder || "///"}id={id}type={inputType} {...rest}/>
    </div>
  );
};

export default FormInput 