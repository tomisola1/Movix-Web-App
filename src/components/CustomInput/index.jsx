import "./style.css";
import { FaEye } from "react-icons/fa";

function CustomInput({ placeholder, text, type = "text", inputClass }) {
  return (
    <div className="custom-input">
      <input
        className={inputClass}
        type={type}
        value={text}
        placeholder={placeholder}
      />
      <span className="icon">
        <FaEye />
      </span>
    </div>
  );
}

export default CustomInput;
