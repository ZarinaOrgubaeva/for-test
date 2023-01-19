import { FormInput } from "../UI/formInput/FormInput";
export  const ExpenseForm = () => {
  return (
    <form>
      <FormInput
        labelName="Название"
        inputType="text"
        placeholder="Введитe..."
      />
      <FormInput
        labelName="Количество денег"
        inputType="number"
      />
      <FormInput
        labelName="Дата"
        inputType="date"
        placeholder="дд.мм.гггг"
      />
    </form>
  );
};
