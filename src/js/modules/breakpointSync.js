const breakpointSync = check => {
	const breakpoint = document.getElementById('breakpoint-sync');
	const property = getComputedStyle(breakpoint)['font-weight'];
	const number = property.substring(0, 1);

	// If checking against a specific threshold
	if (check) {
		if (check <= number) {
			return true;
		} else {
			return false;
		}
	}

	return number;
};

module.exports = breakpointSync;
