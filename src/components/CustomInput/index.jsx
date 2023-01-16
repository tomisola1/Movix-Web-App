import "./style.css";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

function CustomInput({
  placeholder,
  value,
  type = "text",
  inputClass,
  id,
  onChange,
  name,
  required = false,
  withIcon = false,
  iconClick,
}) {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordValue, setPasswordValue] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordValue(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className="custom-input">
      <input
        className={inputClass}
        id={id}
        type={type !== "password" ? type : passwordType}
        name={name}
        value={value !== "password" ? value : passwordValue}
        onChange={onChange || handlePasswordChange}
        placeholder={placeholder}
        required={required}
      />
      {withIcon && (
        <span className="icon" onClick={togglePassword}>
          <FaEye />
        </span>
      )}
    </div>
  );
}

export default CustomInput;
