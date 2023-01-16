import Spinner from "../Spinner/Spinner";
import "./style.css";

function CustomButton({ btnText, onClick, disabled, loading }) {
  return (
    <button
      className="custom-btn"
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? <Spinner /> : btnText}
    </button>
  );
}

export default CustomButton;
