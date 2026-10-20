// this is a single line comment

/* this is a multi line comment

- `shift + right/left` - Highlight code right and left
- `shift + up/down` - Highlight lines of code up and down
- `cmd + right/left arrow` - move cursor to beginning/end of line
- `cmd + up/down arrow` - move cursor to beginning/end of file
- `option + up/down arrow` - move line up/down
- `shift + option + up/down arrow` - copy line up/down
- `cmd + /` - Comment out a line of code
- `cmd + shift + /` - Comment out multiple lines of code
- `cmd + d` - Select the next instance of the selected word
- `cmd + shift + l` - Select all instances of the selected word
- `cmd + shift + f` - Search for a string in the project
- `cmd + shift + o` - Search for a file in the 

*/

console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);

const x = 100;

console.log(x);

console.error('Error');

console.warn('Warning');

console.table({name: 'Brad', email: 'brand@gmail.com'});

console.group('simple');
console.log(x);
console.error('Error');
console.warn('Warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color:green';

console.log('%cHello World', styles);