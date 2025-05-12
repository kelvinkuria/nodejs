const { readFileSync, writeFileSync, readFile, writeFile } = require('fs'); // Added writeFile here
// const { readFile: readFilePromises } = require('fs/promises'); // Kept your promises import, aliased to avoid conflict if you intend to use it elsewhere

console.log('Starting a new operation...');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.error('Error reading first file:', err);
        return;
    }
    const first = result;
    console.log('First file content:', first);

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.error('Error reading second file:', err);
            return;
        }
        const second = result;
        console.log('Second file content:', second);

        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}\n`, { flag: 'a' }, (err, result) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('File written successfully!');
            // 'result' in the writeFile callback is undefined by default if no error.
            // You might want to log a success message or the path.
        });
    });
});