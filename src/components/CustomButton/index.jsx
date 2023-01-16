import "./style.css";

function CustomButton({ btnText, onClick, disabled, loading }) {
  return (
    <button
      className="custom-btn"
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? <span class="loader"></span> : btnText}
    </button>
  );
}

export default CustomButton;
