// react
import { useContext } from "react";

// types
type dateMakerReturnType = {
	monthName: string;
	dayName: string;
	dayOfMonth: number;
};

/** stores date infos and return the infos in an object
 * dayName
 * monthName
 * dayOfMonth
 */
const dateMaker = (): dateMakerReturnType => {
	const date = new Date();

	const monthName = date.toLocaleString("en-US", { month: "long" });

	const dayName = date.toLocaleString("en-US", { weekday: "long" });

	const dayOfMonth = date.getDate();

	return {
		monthName,
		dayName,
		dayOfMonth,
	};
};

// context
import Context from "../context/Context";

const Header = () => {
	const { countOfTasks } = useContext(Context);
	const { monthName, dayName, dayOfMonth } = dateMaker();

	return (
		<div className="p-4 flex flex-col relative">
			<div className="detail-wrapper flex justify-between">
				<div className="date">
					<div className="day text-violet-500 font-bold">
						{dayName}, {dayOfMonth}
						<span className="relative bottom-1 text-sm">st</span>
					</div>
					<div className="month text-gray-300">{monthName}</div>
				</div>
				<div className="task text-gray-300 font-bold  text-sm">
					<span className="text-gray-400">{countOfTasks}</span> Tasks
				</div>
			</div>

			<div className="line absolute w-full left-0 top-full h-0.5 bg-zinc-300"></div>
		</div>
	);
};

export default Header;
