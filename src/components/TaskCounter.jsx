import useTodoStore from "../stores/useTodoStore";

const TaskCounter = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <div className="flex flex-col gap-8 flex-wrap">
      <h3 className="text-lg">Your progress:</h3>
      <div className="flex flex-row gap-2">
        <ion-icon name="chevron-forward-outline"></ion-icon>
        <p>All tasks: {todos.length}</p>
      </div>
      <div className="flex flex-row gap-2">
        <ion-icon name="chevron-forward-outline"></ion-icon>
        <p>
          Tasks completed:{" "}
          {todos.filter((todo) => todo.complete === true).length}{" "}
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <ion-icon name="chevron-forward-outline"></ion-icon>
        <p>
          Tasks remaining:{" "}
          {todos.filter((todo) => todo.complete === false).length}
        </p>
      </div>
    </div>
  );
};

export default TaskCounter;
