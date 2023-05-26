import "./Boxes.css";

// This component renders a box with a number inside it
// The `number` prop is used to determine the number displayed in the box
function Boxes({ number }) {
  return (
    <div className="box">
      {/* Display the number in a heading */}
      <h4 className="display-number">{number + 1}</h4>
    </div>
  );
}

export default Boxes;