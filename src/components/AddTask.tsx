// react
import { useState, useContext } from "react";

// context
import Context from "../context/Context";

const AddTask = () => {
	const [isDisabled, setDisabledStatus] = useState<boolean>(false);
	const { setTaskList } = useContext(Context);

	const handleAddTask = () => {
		const inputEl = document.querySelector(
			"#task-input"
		) as HTMLInputElement;

		setTaskList((prevValue) => [...prevValue, inputEl.value]);
	};

	return (
		<>
			<button
				disabled={isDisabled}
				onClick={() => {
					setDisabledStatus(true);
					silverBox({
						position: "bottom-center",
						title: "Add new Task",

						confirmButton: {
							text: "Add",
							bgColor: "#22C55E",
							borderColor: "#22C55E",
							onClick: () => {
								handleAddTask();
							},
						},
						denyButton: {
							text: "Back",
						},
						onClose: () => {
							setDisabledStatus(false);
						},
						input: {
							id: "task-input",
							placeHolder: "20 pushups...",
							placeHolderColor: "red",
						},
					});
				}}
				className="add-btn absolute -bottom-5 w-12 h-12 text-2xl text-white rounded-full bg-green-500 shadow-sm disabled:bg-gray-500 disabled:cursor-not-allowed
                transition 
				"
			>
				+
			</button>
		</>
	);
};

export default AddTask;
