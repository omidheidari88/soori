import React, { useState } from "react";
import EditedTask from "./EditedTask";
const Task = ({ ...item }) => {
  const [isEditing, setIEditing] = useState(false);
  const deletingHandler = (id) => item.deletedItem(id);

  return (
    <tr>
      <td> {item.id} </td>
      {isEditing ? (
        <EditedTask data={item.title} dataID={item.id} isEdit={(value) => setIEditing(value)} sendData={(id, newValue) => item.editedValue(id, newValue)} />
      ) : (
        <td className="task"> {item.title} </td>
      )}
      <td className="delete">
        <i className="bi bi-x-square" onClick={() => deletingHandler(item.id)}></i>
      </td>
      <td className="edit">
        <i class="bi bi-pencil-square" onClick={() => setIEditing(true)}></i>
      </td>
    </tr>
  );
};

export default Task;
