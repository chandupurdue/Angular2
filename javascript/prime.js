function prime(n) {
    if (n <= 1) {
        console.log("enter number greater than 1 and positive");
    } if (n === 2) {
        console.log("2 is prime number");
    } else {
        var l = Math.floor(Math.sqrt(n));
        var count = 0;
        for (var i = 0; i <= l; i++) {
            if (n % i == 0) {
                count++
            }
        }
        if (count == 0) {
            console.log("prime number");
        } else {
            console.log("not a prime number");
        }
    }
}
prime(6);