import React from "react";

import { shallow, ShallowWrapper } from "enzyme";

import App from "../App";
import ExampleComponent from "../Components/Examples/ExampleComponent";

describe("App", () => {
	let wrapper: ShallowWrapper;
	beforeAll(() => {
		wrapper = shallow(<App />);
	});

	it("should contain word `React`", () => {
		const header = wrapper.find("h1");
		expect(header.text()).toMatch(/React/);
	});
	it("should contain one header", () => {
		const header = wrapper.find("h1");
		expect(header.length).toEqual(1);
	});
	it("should render the ExampleComponent Component", () => {
		expect(wrapper.containsMatchingElement(<ExampleComponent />)).toEqual(
			true
		);
	});
});
