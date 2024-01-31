import "./css/style.css";
import Todo from "./Todo";

const Form = ({
  numero_uno,
  numero_dos,
  setNum1,
  setNum2,
  handleFormSubmit,
  result,
}) => {
  return (
    <form className="addForm" onSubmit={handleFormSubmit}>
      <div>
        <input
          type="text"
          id="addIten"
          placeholder="First Number"
          required
          value={numero_uno}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          id="addItem"
          placeholder="Second Number"
          required
          value={numero_dos}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
