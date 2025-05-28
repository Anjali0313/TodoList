import AddTask from './AddTask.jsx';
import TaskList from './TaskList.Jsx';
import { TasksProvider } from './TasksContext.jsx';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}