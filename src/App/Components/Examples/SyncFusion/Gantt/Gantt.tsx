import React, { FC, useState } from "react";

import {
	GanttComponent,
	ColumnsDirective,
	ColumnDirective,
	Inject,
	Edit,
	Selection,
	EditSettingsModel,
} from "@syncfusion/ej2-react-gantt";

const GanttData = [
	{
		TaskID: 1,
		TaskName: "Project Initiation",
		StartDate: new Date("04/02/2019"),
		EndDate: new Date("04/21/2019"),
		subtasks: [
			{
				TaskID: 2,
				TaskName: "Identify Site location",
				StartDate: new Date("04/02/2019"),
				Duration: 4,
				Progress: 50,
			},
			{
				TaskID: 3,
				TaskName: "Perform Soil test",
				StartDate: new Date("04/04/2019"),
				Duration: 3,
				Progress: 50,
			},
			{
				TaskID: 4,
				TaskName: "Soil test approval",
				StartDate: new Date("04/07/2019"),
				Duration: 5,
				Progress: 50,
			},
		],
	},
	{
		TaskID: 5,
		TaskName: "Project Estimation",
		StartDate: new Date("04/02/2019"),
		EndDate: new Date("04/21/2019"),
		subtasks: [
			{
				TaskID: 6,
				TaskName: "Develop floor plan for estimation",
				StartDate: new Date("04/04/2019"),
				Duration: 1,
				Progress: 50,
			},
			{
				TaskID: 7,
				TaskName: "List materials",
				StartDate: new Date("04/07/2019"),
				Duration: 7,
				Progress: 50,
			},
			{
				TaskID: 8,
				TaskName: "Estimation approval",
				StartDate: new Date("04/012/2019"),
				Duration: 2,
				Progress: 50,
			},
		],
	},
];

const Gantt: FC = () => {
	const [taskFields] = useState({
		id: "TaskID",
		name: "TaskName",
		startDate: "StartDate",
		duration: "Duration",
		progress: "Progress",
		child: "subtasks",
	});

	const [editSettings] = useState<EditSettingsModel>({
		allowEditing: true,
		mode: "Auto",
	});

	return (
		<div>
			<h1>SyncFusion Gantt</h1>
			<hr />
			<h3>Starting Gantt</h3>
			<GanttComponent
				dataSource={GanttData}
				height="450px"
				taskFields={taskFields}
			/>
			<hr />
			<h3>Column Defining</h3>
			<GanttComponent
				dataSource={GanttData}
				height="450px"
				taskFields={taskFields}
			>
				<ColumnsDirective>
					<ColumnDirective field="TaskID" width="50" />
					<ColumnDirective field="TaskName" headerText="Job Name" />
					<ColumnDirective field="StartDate" />
					<ColumnDirective
						field="Duration"
						headerText="Job Duration"
					/>
				</ColumnsDirective>
			</GanttComponent>
			<hr />
			<h3>Enable Cell Editing</h3>
			<GanttComponent
				dataSource={GanttData}
				height="450px"
				taskFields={taskFields}
				allowSelection={true}
				editSettings={editSettings}
			>
				<Inject services={[Edit, Selection]} />
			</GanttComponent>
		</div>
	);
};

export default Gantt;
