// react
import { useEffect, useState } from "react";

// components
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

// contexts
import Context from "./context/Context";

const App = () => {
	const listFromLocalStorage = JSON.parse(localStorage.getItem("task-list")!);

	if (!listFromLocalStorage)
		localStorage.setItem("task-list", JSON.stringify([]));

	const [taskList, setTaskList] = useState<string[]>(listFromLocalStorage);
	const [countOfTasks, setCountOfTasks] = useState<number>(0);

	useEffect(() => {
		setCountOfTasks(taskList.length);
		localStorage.setItem("task-list", JSON.stringify(taskList));
	}, [taskList]);

	const handleTaskMarkAsDone = (idx: number) => {
		setTaskList(
			taskList.filter((item, index) => item[index] !== item[idx])
		);
	};
	return (
		<>
			<div className="container">
				<div className="task-wrapper relative w-full bg-white rounded">
					<Context.Provider
						value={{
							taskList,
							countOfTasks,
							setTaskList,
							handleTaskMarkAsDone,
						}}
					>
						<Header />
						<AddTask />
						<Tasks />
					</Context.Provider>
				</div>
			</div>
		</>
	);
};

export default App;
