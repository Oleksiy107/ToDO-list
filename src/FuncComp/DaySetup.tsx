import { useState, useEffect } from "react";
type Tasks = {
  id: number;
  tasks: string;
};
let nextId: number = 0;

const List: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [taskArr, setTaskArr] = useState<Tasks[]>([]);
  const [deleteTask, setDeleteTask] = useState<Tasks[]>([]);
  const addTask = () => {
    setTaskArr([...taskArr, { id: nextId++, name: task }]);
  };
  useEffect(() => {
    setDeleteTask(taskArr);
  }, [taskArr]);

  const handleDelete = (id: number) => {
    const updatedTasks = taskArr.filter((task) => task.id !== id);
    setTaskArr(updatedTasks);
  };
  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {deleteTask.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default List;
// import { useState, useEffect } from "react";
// let nextId: number = 0;
// interface Task {
//   id: number;
//   name: string;
// }
// const List: React.FC = () => {
//   const [task, setTask] = useState<string>("");
//   const [taskArr, setTaskArr] = useState<Task[]>([]);
//   const [deleteTask, setDeleteTask] = useState<Task[]>([]);

//   const addTask = () => {
//     setTaskArr([...taskArr, { id: nextId++, name: task }]);
//   };
//   useEffect(() => {
//     setDeleteTask(taskArr);
//   }, [taskArr]);
//   const handleDelete = (id: number) => {
//     const updatedTasks = taskArr.filter((task) => task.id !== id);
//     setTaskArr(updatedTasks);
//   };
//   return (
//     <>
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />
//       <button onClick={addTask}>Add</button>
//       <ul>
//         {deleteTask.map((item) => (
//           <li key={item.id}>
//             {item.name}
//             <button onClick={() => handleDelete(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
// export default List;
