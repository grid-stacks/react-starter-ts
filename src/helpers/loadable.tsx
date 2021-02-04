import React, { ComponentType, FC, lazy, ReactElement, Suspense } from "react";

export type IFunc = () => Promise<{ default: ComponentType<unknown> }>;
export interface IFallback {
	fallback: ReactElement | null;
}

const loadable = (
	importFunc: IFunc,
	fb: IFallback = { fallback: null }
): FC => {
	const LazyComponent = lazy(importFunc);

	const ReturnComponent = (props: Record<string, unknown>) => (
		<Suspense fallback={fb.fallback}>
			<LazyComponent {...props} />
		</Suspense>
	);

	return ReturnComponent;
};

export default loadable;
