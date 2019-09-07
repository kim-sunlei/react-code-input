const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'CodeInput.js',
        path: path.resolve(__dirname, 'dist')
    }
};
