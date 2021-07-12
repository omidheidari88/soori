import React from "react";

const EditedTask = ({ data, sendData, dataID, isEdit }) => {
  const dataHandler = () => {
    sendData(dataID, document.getElementById(dataID)?.value);
    isEdit(false);
  };
  return (
    <>
      <input defaultValue={data} id={dataID} type="text" name="task" className="task_input" />
      <i onClick={() => dataHandler()} className="bi bi-check2-square"></i>
    </>
  );
};

export default EditedTask;
