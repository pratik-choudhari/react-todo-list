import { useState } from "react";
import { SiAddthis } from "react-icons/si";

export default function InputTask(props) {
  const [inputValue, setInputValue] = useState("");
  let callback = props.addTaskCallback;

  const clearInput = () => {
    callback(inputValue);
    setInputValue("");
  };

  return (
    <div style={{ paddingTop: "10%" }}>
      <h2>So, what are you doing next?</h2>
      <div className="row justify-content-center">
        <div className="col-6 mt-3 align-self-end">
          <div className="input-group">
            <input
              type="text"
              className="form-control py-2"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <div className="input-group-append">
            <button
                className="btn btn-success py-2"
                onClick={clearInput}
                type="button"
              >
                <SiAddthis />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
