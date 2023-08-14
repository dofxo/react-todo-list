// react
import { useContext } from "react";

// children
import Task from "./Task";

// context
import Context from "../context/Context";

const Tasks = () => {
	const { taskList } = useContext(Context);

	return (
		<div className="flex flex-col mt-10 p-4 gap-y-5">
			{taskList.map((taskInfo, index) => (
				<Task taskInfo={taskInfo} key={index} index={index} />
			))}
		</div>
	);
};

export default Tasks;
