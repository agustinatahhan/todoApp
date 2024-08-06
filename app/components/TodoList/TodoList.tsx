import { ITask } from "@/types/tasks";
import { Task } from "../Task/Task";
interface TodoListProps {
  tasks: ITask[];
}

export const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Tasks</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task) => (
            <Task key={task.id} task={task}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};
