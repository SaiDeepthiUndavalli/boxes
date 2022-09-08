const Box = (props) => {
  //  Write your code here.
  const { box, boxText } = props;
  return <p className={`box ${className}`}>{boxText}</p>;
};

const element = (
  //  Write your code here.
  <div class="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes">
      <Box className="small-box" boxText="Small" />
      <Box className="medium-box" boxText="Medium" />
      <Box className="large-box" boxText="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
