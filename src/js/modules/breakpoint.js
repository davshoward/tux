export const breakpoint = () => {
	// Setup the breakpoint variable
	let breakpoint;

	// Get the current breakpoint
	const getBreakpoint = function() {
		return window
			.getComputedStyle(document.body, ':before')
			.content.replace(/\"/g, '');
	};

	// Calculate breakpoint on page load
	breakpoint = getBreakpoint();

	return breakpoint;
};
