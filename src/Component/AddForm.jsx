import React, { useState } from "react";
import { submit } from "../redux/action";
import { useDispatch } from "react-redux";
const initState = {
  name: "",

  stationnum: "",

  prtype: "",

  recid: "",
};

function AddForm() {
  const [input, setInput] = useState(initState);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = () => {
    const payload = {
      data: input,
      isAdd: false,
    };
    dispatch(submit(payload));
  };
  return (
    <div style={{ backgroundColor: "skyblue" }}>
      <h1>AddForm</h1>

      <input
        type="number"
        placeholder="Barcode#"
        name="recid"
        value={input.recid}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Printer Name#"
        name="name"
        value={input.name}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="work station connected"
        name="stationnum"
        value={input.stationnum}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="port/command"
        name="prtype"
        value={input.prtype}
        onChange={handleChange}
      />
      <br />
      <br />
      <button onClick={handleSubmit} class="submit">
        Submit
      </button>
    </div>
  );
}

export default AddForm;
