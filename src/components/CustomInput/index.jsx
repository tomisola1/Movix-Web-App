import "./style.css";
import { FaEye } from "react-icons/fa";

function CustomInput({
  placeholder,
  value,
  type = "text",
  inputClass,
  id,
  onChange,
  name,
}) {
  return (
    <div className="custom-input">
      <input
        className={inputClass}
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
      <span className="icon">
        <FaEye />
      </span>
    </div>
  );
}

export default CustomInput;
