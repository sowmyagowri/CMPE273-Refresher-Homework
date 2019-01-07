var movies = [];

movies.push("Jurassic Park");
movies.push("Coco");
movies.push("Avengers");
movies.push("Sing");

function print_array(array) {
	for (i=0; i<array.length; i++)
		console.log(array[i]);

}

console.log("\nMovies in the library: ");
print_array(movies);

movies.sort();
console.log("\nMovies in the library after sorting: ");
print_array(movies);