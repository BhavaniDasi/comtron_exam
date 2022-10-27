import "./App.css";
import Table from "./Component/Table";
import { useSelector } from "react-redux";
import EditForm from "./Component/EditForm";
import AddForm from "./Component/AddForm";

function App() {
  const isEdit = useSelector((state) => state.isEdit);
  // const isAdd = useSelector((state) => state.isAdd);
  const isAdd = useSelector((state) => state.isAdd);
  console.log(isEdit);
  console.log(isAdd);
  return (
    <div className="App">
      {isEdit ? <EditForm /> : isAdd ? <AddForm /> : <Table />}
      {/* <Table />
      <EditForm /> */}
      {/* <AddForm /> */}
    </div>
  );
}

export default App;
