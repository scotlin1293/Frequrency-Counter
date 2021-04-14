// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    const obj = {};
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values [i] || null;
    }
    return obj;
}



twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}