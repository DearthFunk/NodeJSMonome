module.exports = {
	vals: [
		{char: 'a', grid: [[0,0,0,0,0,0,0,0],[0,0,0,1,1,0,0,0],[0,0,1,0,0,1,0,0],[0,0,1,0,0,1,0,0],[0,0,1,1,1,1,0,0],[0,0,1,0,0,1,0,0],[0,0,1,0,0,1,0,0],[0,0,0,0,0,0,0,0]]},
		{char: 'b', grid: []},
		{char: 'c', grid: []},
		{char: 'd', grid: []},
		{char: 'e', grid: []},
		{char: 'f', grid: []},
		{char: 'g', grid: []},
		{char: 'h', grid: []},
		{char: 'i', grid: []},
		{char: 'j', grid: []},
		{char: 'k', grid: []},
		{char: 'l', grid: []},
		{char: 'm', grid: []},
		{char: 'n', grid: []},
		{char: 'o', grid: []},
		{char: 'p', grid: []},
		{char: 'q', grid: []},
		{char: 'r', grid: []},
		{char: 's', grid: []},
		{char: 't', grid: []},
		{char: 'u', grid: []},
		{char: 'v', grid: []},
		{char: 'w', grid: []},
		{char: 'x', grid: []},
		{char: 'y', grid: []},
		{char: 'z', grid: []}
	],
	gridByChar: function(charVal){
		for (var i = 0; i < this.vals.length; i++){
			if (this.vals[i].char === charVal.toLowerCase()){
				return this.vals[i].grid;
			}
		}
		return false;
	},
	gridByCharAtLevel: function(charVal, atLevel){
		var grid = this.gridByChar(charVal);
		if (!grid) { return false; }
		var newGrid = grid;
		for (var x = 0; x < grid.length; x++){
			for (var y = 0; y < grid[x].length; y++){
				if (grid[x][y]) {
					newGrid[x][y] = atLevel;
				}
			}
		}
		return newGrid;
	}
};
