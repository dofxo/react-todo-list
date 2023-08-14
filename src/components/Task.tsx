// react
import { useContext } from "react";

// style
import "../styles/Task.scss";

// types
type TaskPropTypes = {
	taskInfo: string;
	index: number;
};

import Context from "../context/Context";

const Task = ({ taskInfo, index }: TaskPropTypes) => {
	const { handleTaskMarkAsDone } = useContext(Context);
	return (
		<div className="text-slate-600 text-lg flex justify-between items-center">
			<div className="task-title transition">{taskInfo}</div>
			<button
				onClick={() => {
					silverBox({
						alertIcon: "warning",
						title: `Mark ${taskInfo} As Done.`,
						text: "are you sure that you want to mark this task as done?",
						centerContent: true,
						confirmButton: {
							text: "Yes",
							onClick: () => {
								handleTaskMarkAsDone(index);
							},
						},
						denyButton: { text: "No" },
					});
				}}
				title="done"
				type="button"
				className="done w-7 h-w-7 active:scale-90  bg-green-500 rounded-full text-white no-underline"
			>
				✔
			</button>
		</div>
	);
};

export default Task;
