const deleteDuplicates = require("../deleteDuplicates");

test("takes [1,1,2] and returns [1,2]", () => {
	const expected = [1,2]
	expect(deleteDuplicates([1, 1, 2])).toEqual(([1,2]));
});

test("takes [1,1,2,3,3] and returns [1,2,3]", () => {
	expect(deleteDuplicates([1, 1, 2, 3, 3])).toEqual(
		([1, 2, 3])
	);
});
test("takes [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4] and returns [1,2,3,4]", () => {
	expect(deleteDuplicates([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4])).toEqual([
		1, 2, 3, 4,
	]);
});
