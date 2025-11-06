function poisci_najmanjsi_element(t, n) {
    // preveri veljavnost indeksa n
    if (n < 0 || n >= t.length - 1) {
        return -1;
    }

    let i_min = n;
    let e_min = t[n];

    // išči najmanjši element od n do elementa pred 0 (čuvaj)
    for (let i = n; i < t.length - 1; i++) {
        if (t[i] < e_min) {
            e_min = t[i];
            i_min = i;
        }
    }

    return i_min;
}





t = [2, 2, 2, 2, 2, 0];
indeks = poisci_najmanjsi_element(t, 1);
console.log(indeks);

/*
1
*/
t = [34, 3, 7, 99, 9, 18, 0];
indeks = poisci_najmanjsi_element(t, 7);
console.log(indeks);

/*
-1
*/
t = [3, 56, 1, 8, 0];
indeks = poisci_najmanjsi_element(t, 0);
console.log(indeks);

/*
2
*/
t = [23, 7, 12, 9, 728, 3, 13, 0];
indeks = poisci_najmanjsi_element(t, 0);
console.log(indeks);

/*
5
*/
t = [3, 6, 16, 9, 0];
indeks = poisci_najmanjsi_element(t, 0);
console.log(indeks);

/*
0
*/
t = [34, 3, 7, 99, 9, 18, 0];
indeks = poisci_najmanjsi_element(t, 2);
console.log(indeks);

/*
2
*/
t = [1, 2, 3, 55, 3, 76, 1, 3, 1, 0];
indeks = poisci_najmanjsi_element(t, 4);
console.log(indeks);

/*
6
*/
t = [1, 2, 3, 3, 3, 2, 2, 5, 0];
indeks = poisci_najmanjsi_element(t, -3);
console.log(indeks);

/*
-1
*/
