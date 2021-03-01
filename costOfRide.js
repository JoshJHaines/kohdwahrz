function insurance(age, size, numofdays) {
	let agePrice = 0;
	let sizePrice = 0;
	let daysPrice = 0;
	const cost = agePrice + sizePrice + daysPrice;

	if (age < 25) {
		agePrice = 10 * numofdays;
	}
	agePrice;
	if (size === "medium") {
		sizePrice = 10;
	}
	if (size === "economy") {
		sizePrice = 0;
	} else if (size !== "economy" && size !== "medium") {
		sizePrice = 15;
	}
	sizePrice;
	if (numofdays >= 0) {
		daysPrice = numofdays * 50;
		return cost;
	} else if (numofdays < 0) {
		return 0;
	}
}

insurance(24, "medium", 10);
