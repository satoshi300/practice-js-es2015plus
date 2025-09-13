import { files } from './data.js';

const toBytes = ({ length = 0, unit = 'B' }) => {
    if (unit === 'KB') {
        return length * 1024;
    }
    if (unit === 'MB') {
        return length * 1024 * 1024;
    }
    if (unit === 'GB') {
        return length * 1024 * 1024 * 1024;
    }
    return length;
    //   switch (unit) {
    //     case 'KB': return length * 1024;
    //     case 'MB': return length * 1024 * 1024;
    //     case 'GB': return length * 1024 * 1024 * 1024;
    //     default:   return length; 
    //   }
};

const getFileSize = ({ size: { length = 0, unit = 'B' } = {} }) =>
    toBytes({ length, unit });

const calculateFilesSize = (arr) => {
    let total = 0;
    arr.forEach((file) => {
        total += getFileSize(file);
    });
    return total;
};

console.log(`SUMA: ${calculateFilesSize(files)} B`);

