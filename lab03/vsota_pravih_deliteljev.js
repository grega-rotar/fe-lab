function vsota_pravih_deliteljev(n) {
    var vsota = 0;
    for (let i = 1; i <= (n/2); i++) {
        if (n % i == 0) {
            vsota += i;
        }
    }
    return vsota;
}