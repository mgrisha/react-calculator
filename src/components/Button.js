const objClasses = {
  '=': 'equals',
  'x': 'opt',
  '-': 'opt',
  '+': 'opt',
  '/': 'opt'
};

const Button = ({ value }) => {
  return (
    <button className={`${objClasses[value]} button`}>{value}</button>
  );
}

export default Button;