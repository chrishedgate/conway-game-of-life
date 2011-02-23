var CGOL = window.CGOL || {};

CGOL.Matrix = function (w, h) {
	this.width = w;
	this.height = h;
	this.numberOfCells = (w || 0) * (h || 0);
	this.board = [];
	for (var i = 0; i < w; i++) {
		this.board[i] = [];
		for (var j = 0; j < h; j++) {
			this.board[i][j] = false;
		}
	}

	for (var i = 2; i < arguments.length; i++) {
		var x = arguments[i].x;
		var y = arguments[i].y;
		this.board[x][y] = true;
	}
}

CGOL.Matrix.prototype.cellStateAt = function(x, y) {
	if(x < 0 || y < 0 || x >= this.width || y >= this.height) {
		return false;
	}
	return this.board[x][y];
}

CGOL.Matrix.prototype.liveNeighbourCountAt = function(x, y) {
	var count = 0;
	for (var dx = -1; dx <= 1; dx++) {
		for (var dy = -1; dy <= 1; dy++) {
			if(dx !== 0 || dy !== 0) {
				if(this.cellStateAt(x + dx, y + dy)) {
					count++;
				}
			}
		}
	}
	return count;
}

