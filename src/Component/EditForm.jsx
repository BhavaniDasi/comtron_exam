import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRec } from "../redux/action";

function EditForm() {
  const current = useSelector((state) => state.currentData);
  const isEdit = useSelector((state) => state.isEdit);
  const dispatch = useDispatch();

  console.log(current);
  console.log(isEdit);
  const [input, setInput] = useState(isEdit ? current : "");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleUpdate = () => {
    const payload = {
      data: input,
      isEdit: false,
    };
    dispatch(updateRec(payload));
  };
  return (
    <div style={{ backgroundColor: "skyblue" }}>
      <h1>Edit Form</h1>

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
      <button onClick={handleUpdate} class="update">
        Update
      </button>
    </div>
  );
}

export default EditForm;
