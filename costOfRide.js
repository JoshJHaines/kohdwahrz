function insurance(age, size, numofdays) {
	let agePrice = 0;
	let sizePrice = 0;
	let daysPrice = 0;

	if (age < 25) {
		agePrice = 10 * numofdays;
	}
	agePrice;
	if (size === "medium") {
		sizePrice = 10 * numofdays;
	}
	if (size === "economy") {
		sizePrice = 0;
	} else if (size !== "economy" && size !== "medium") {
		sizePrice = 15 * numofdays;
	}
	sizePrice;
	if (numofdays >= 0) {
		daysPrice = numofdays * 50;
		return agePrice + sizePrice + daysPrice;
	} else if (numofdays < 0) {
		return 0;
	}
}

insurance(18, "medium", 7);
