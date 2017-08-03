function less(x, y, z) {
    if (x >= 20 && y >= 20) {
        console.log((x < y) ? x : y);
        
    }
    if (y >= 20 && z >= 20) {
        console.log((y < z) ? y : z);
    } if (x >= 20 && z >= 20) {
        console.log((x < z) ? x : z);
    }

}
less(6,21,35);