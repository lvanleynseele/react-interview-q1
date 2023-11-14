/**
 * do not change the implementation
 */
export const isNameValid = (name) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(name !== 'invalid name');
    }, Math.random() * 2000);
});

/**
 * do not change the implementation
 */
export const getLocations = () => Promise.resolve(['Canada', 'China', 'USA', 'Brazil']);



let fakeUsers = [
    {name: 'John', location: 'Canada'},
    {name: 'Jane', location: 'China'},
    {name: 'Bob', location: 'USA'},
    {name: 'Bill', location: 'Brazil'},
    {name: 'Joe', location: 'Canada'},
    {name: 'Jill', location: 'China'},
    {name: 'Ben', location: 'USA'},
];

export const getUsers = () => Promise.resolve(users);

export function addUser(user) {
    users.push(user);
}