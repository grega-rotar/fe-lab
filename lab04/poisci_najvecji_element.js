function poisci_najvecji_element(t, n) {
    // preveri veljavnost indeksa n
    if (n < 0 || n >= t.length - 1) {
        return -1;
    }

    let i_max = n;
    let e_max = t[n];

    // išči največji element od n do elementa pred 0 (čuvaj)
    for (let i = n; i < t.length - 1; i++) {
        if (t[i] > e_max) {
            e_max = t[i];
            i_max = i;
        }
    }

    return i_max;
}