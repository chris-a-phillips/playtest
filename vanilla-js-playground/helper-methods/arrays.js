const kitchenStaff = [
	{ name: 'Thomas', age: 31, role: 'Line Cook' },
	{ name: 'Sarah', age: 24, role: 'Line Cook' },
	{ name: 'Justine', age: 40, role: 'Head Chef' },
	{ name: 'Octavis', age: 35, role: 'Sous Chef' },
	{ name: 'Carter', age: 28, role: 'Expeditor' },
	{ name: 'Cherise', age: 27, role: 'Line Cook' },
];

// fill() => return modified array
// fills the arrray with static value

function replaceStaff(array) {
    array.fill({ name: 'Gordon', age: 54, role: 'World Class Chef' });
    return array;
}

// reduce() => return new value
// reduces all values (numbers, strings, objects) into one value and is basically a loop with a memory

function totalAge(array) {
    const ages = []
    for (let i = 0; i < array.length; i++) {
        ages.push(array[i].age)
    }

    const sum = ages.reduce((acc, curr) => acc + curr)

    return sum
}

function listNames(arr, obj) {
    arr.push(obj.name)
    return arr
}

const employees = [
	{ name: 'Sam', age: 25, role: 'Developer' },
	{ name: 'John', age: 32, role: 'Manager' },
	{ name: 'Ronaldo', age: 29, role: 'Architect' },
	{ name: 'Perker', age: 25, role: 'Developer' },
	{ name: 'Sophia', age: 38, role: 'Director' },
	{ name: 'kristine', age: 21, role: 'Developer' },
];

function getRoleReducer(acc, currentValue) {
	acc.push(currentValue.role);
	return acc;
}

const roles = employees.reduce(getRoleReducer, []);

console.log(roles); 




// create sort for array
const values = [24, 32, 1, 100, 12, 2, 4, 36, 8, 21];
console.log(values.sort((a, b) => {	return a < b ? -1 : 1;}));