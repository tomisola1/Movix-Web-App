import "./style.css";

function CustomButton({ btnText, onClick }) {
  return (
    <button className="custom-btn" onClick={onClick}>
      {btnText}
    </button>
  );
}

export default CustomButton;
