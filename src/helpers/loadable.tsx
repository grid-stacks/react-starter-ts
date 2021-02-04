import React, { ComponentType, FC, lazy, ReactElement, Suspense } from "react";

export type IFunc = () => Promise<{ default: ComponentType<unknown> }>;
export interface IFallback {
	fallback: ReactElement | null;
}

/**
 * This component will load component lazily with suspense feature
 *
 * @param importFunc function - function for importing component
 * @param fb ReactElement - element rendering before load complete
 */
const Loadable = (
	importFunc: IFunc,
	fb: IFallback = { fallback: null }
): FC => {
	// Lazy loading of the component
	const LazyComponent = lazy(importFunc);

	const ReturnComponent = (props: Record<string, unknown>) => (
		// React suspense loading
		<Suspense fallback={fb.fallback}>
			<LazyComponent {...props} />
		</Suspense>
	);

	return ReturnComponent;
};

export default Loadable;
