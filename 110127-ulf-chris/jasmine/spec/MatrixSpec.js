describe("Matrix", function() {
	it("should have zero cells when empty", function() {
		var matrix = new CGOL.Matrix();

		expect(matrix.numberOfCells).toEqual(0);
	});
	
	it("should have 9 cells when 3x3", function() {
		var matrix = new CGOL.Matrix(3, 3);

		expect(matrix.numberOfCells).toEqual(9);
	});
	
	it("should have a dead cell at 1, 1 when not seeded", function() {
		var matrix = new CGOL.Matrix(3, 3);

		expect(matrix.cellStateAt(1, 1)).toBeFalsy();
	});
	
	it("should have an alive cell at 1, 1 when seeded for that", function() {
		var matrix = new CGOL.Matrix(3, 3, {x: 1, y: 1});

		expect(matrix.cellStateAt(1, 1)).toBeTruthy();
	});
	
	it("should have alive cells when seeded for that", function() {
		var matrix = new CGOL.Matrix(3, 3, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1});

		expect(matrix.cellStateAt(0, 1)).toBeTruthy();
		expect(matrix.cellStateAt(1, 1)).toBeTruthy();
		expect(matrix.cellStateAt(2, 1)).toBeTruthy();
	});
	
	it("should have a cell at 1, 1 with 2 live neighbours", function() {
		var matrix = new CGOL.Matrix(3, 3, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1});
		
		expect(matrix.liveNeighbourCountAt(1, 1)).toEqual(2);
	});
	
	it("should have a cell at 0, 0 with 2 live neighbours", function() {
		var matrix = new CGOL.Matrix(3, 3, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1});
		
		expect(matrix.liveNeighbourCountAt(0, 0)).toEqual(2);
	});
	
	it("should have a cell at 2, 2 with 2 live neighbours", function() {
		var matrix = new CGOL.Matrix(3, 3, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1});
		
		expect(matrix.liveNeighbourCountAt(2, 2)).toEqual(2);
	});
});