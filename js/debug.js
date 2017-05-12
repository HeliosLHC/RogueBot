function debug() {
	// Console Table
	// Log Global Variable Array
	console.table()

	// HTML Output Debugging
	$("body").html("<html><table>" + debugTable + "</table></html>");

	var debugTable = "<tr>";
}