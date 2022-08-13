const MyButton = ({ text, type, onClick }) => {
  const butType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      className={["MyButton", `MyButton_${butType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
