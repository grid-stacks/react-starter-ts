import React from "react";
import { Provider } from "react-redux";

import { ShallowWrapper, shallow, mount } from "enzyme";

import Count from "./Count";
import { initialCountState, ICountState, countReducer } from "./count.slice";
import store from "../../../store";

describe("<Count />", () => {
	let wrapper: ShallowWrapper;

	beforeAll(() => {
		wrapper = shallow(
			<Provider store={store}>
				<Count />
			</Provider>
		);
	});

	it("defines the component", () => {
		// console.log("wrapper is", wrapper.debug());
		expect(wrapper).toBeDefined();
	});

	it("should contain word `Count`", () => {
		const header = wrapper.find(<Count />);
		console.log(header.debug());
		// expect(header.text()).toMatch(/Count/);
		// expect(wrapper.find(<Count />)).toBeInTheDocument();
	});
});
