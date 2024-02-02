function gcd(a, b) {
        let gcd = a % b;

        while (gcd !== 0) {
                a = b;
                b = gcd;
                gcd = a % b;
        }
         console.log(b);
}
gcd(15, 5); //5
gcd(84, 18);//6
gcd(2154, 458); //2
