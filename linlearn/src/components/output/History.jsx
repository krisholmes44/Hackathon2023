import React from "react";

function History(props) {
  const GlobalArray = () => {
    const [array, setArray] = useState([]);
    const appendToArray = (text) => {
      setArray([...array, text]);
    };

    input = props.input.ToLowerCase();
    if (input == "clear") {
      setArray([]);
    } else if (input != null) {
      array.append(input);
    }

    return (
      <div clasName="output">
        {array.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    );
  };
}

export default History;
