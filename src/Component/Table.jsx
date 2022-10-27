import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRec, editRec, show } from "../redux/action";

function Table() {
  const Data = useSelector((state) => state.data);
  console.log(Data);
  const dispatch = useDispatch();

  const handleDel = (id) => {
    const payload = {
      id,
    };
    dispatch(deleteRec(payload));
  };
  const handleEdit = (item) => {
    const payload = {
      item,
      isEdit: true,
    };
    dispatch(editRec(payload));
  };

  const handleAdd = () => {
    const payload = {
      isAdd: true,
    };
    dispatch(show(payload));
  };

  return (
    <div>
      <h1>Table</h1>
      <table class="table">
        <tr class="row">
          <th>Printer#</th>
          <th> Name</th>
          <th> Workstation</th>
          <th> Type</th>
          <th> Action</th>
        </tr>
        {Data.map((val) => {
          return (
            <tr>
              <td>{val.recid}</td>
              <td>{val.name}</td>
              <td>{val.stationnum}</td>
              <td>{val.prtype}</td>
              <td>
                <button onClick={() => handleEdit(val)}>
                  <span>&#9998;</span>
                </button>
                <button onClick={() => handleDel(val.recid)}>
                  {" "}
                  <span>&#9986;</span>
                </button>
                <button>
                  <span>&#128065;</span>
                </button>
              </td>
            </tr>
          );
        })}
      </table>

      <button onClick={handleAdd} class="add">
        Add new record
      </button>
    </div>
  );
}

export default Table;
