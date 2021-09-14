
function countCats(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == '^^') {
                x++;
            }
        }
    }
    if (x == 0) {
        return 0;
    }
    return x;
}
