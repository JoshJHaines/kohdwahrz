function whatday(num) {
	const week = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	if (num > 7 || num < 1) {
		return "Wrong, please enter a number between 1 and 7";
	} else {
		return week[num - 1];
	}
}
