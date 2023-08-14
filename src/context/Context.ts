import { createContext } from "react";

type ContextTypes = {
	taskList: string[];
	countOfTasks: number;
	setTaskList: React.Dispatch<React.SetStateAction<string[]>>;
	handleTaskMarkAsDone: (idx: number) => void;
};

const Context = createContext<ContextTypes>({
	taskList: [],
	countOfTasks: 0,
	setTaskList: () => {},
	handleTaskMarkAsDone: () => {},
});

export default Context;
