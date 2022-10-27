const init = {
  isEdit: false,
  isAdd: false,

  data: [
    {
      name: "99AS",
      stationnum: "99",

      port: "1",

      prtype: "advantage",

      height: 1,

      width: 5,

      linetonext: 1,

      printbar: "Y",

      printname: "Y",

      printtest: "Y",

      pins: "bar128c",

      extra: 99,

      checksum: "Y",

      skip: "Y",

      indent: 11,

      labelType: "S",

      filler: "",

      recid: 20,
    },

    {
      name: "COIN",

      stationnum: "99",

      port: "1",

      prtype: "zebra",

      height: 1,

      width: 5,

      linetonext: 1,

      printbar: "Y",

      printname: "Y",

      printtest: "Y",

      pins: "bar39",

      extra: 99,

      checksum: "Y",

      skip: "Y",

      indent: 11,

      labelType: "SRC",

      filler: "",

      recid: 21,
    },
  ],
  currentData: {},
};
const reducer = (state = init, action) => {
  const { type, payload } = action;
  console.log(action);
  console.log(state);
  switch (type) {
    case "DEL_REC":
      const filterData = state.data.filter((el) => el.recid !== payload.id);

      return {
        ...state,
        data: filterData,
      };

    case "EDIT_REC":
      return {
        ...state,
        currentData: payload.item,
        isEdit: payload.isEdit,
      };
    case "UPDATE_REC":
      const index = state.data.findIndex(
        (el) => el.recid === payload.data.recid
      );
      const newData = [...state.data];
      newData[index] = payload.data;
      return {
        ...state,
        data: newData,
        isEdit: payload.isEdit,
      };
    case "SHOW_REC":
      return {
        ...state,
        // data: [...state.data],
        isAdd: payload.isAdd,
      };
    case "SUBMIT_REC":
      return {
        ...state,
        isAdd: payload.isAdd,
        data: [...state.data, payload.data],
      };

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
