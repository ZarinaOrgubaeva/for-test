export  const ExpensesItem = ({title,date,price}) => {
  return (
    <div >
      <p>{date.toStirng()}</p>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};
