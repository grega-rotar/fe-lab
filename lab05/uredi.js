function uredi(t, smer) {
    if (smer !== 1 && smer !== -1) return -1;

    let dolzina = t.length - 1;

    for (let i = 0; i < dolzina - 1; i++) {
        let indeks;
        if (smer === 1) {
            indeks = poisci_najmanjsi_element(t, i);
        } else {
            indeks = poisci_najvecji_element(t, i);
        }
        if (indeks !== -1) zamenjaj_elementa(t, i, indeks);
    }

    return 0;
}

t = [0];
uredi(t, 1);
console.log(JSON.stringify(t));

/*
[0]
*/
t = [1, 2, 3, 4, 5, 6, 0];
uredi(t, 1);
console.log(JSON.stringify(t));

/*
[1, 2, 3, 4, 5, 6, 0]
*/
t = [19, 4, 12, 54, 7, 239, 33, 7, 0];
uredi(t, 1);
console.log(JSON.stringify(t));

/*
[4, 7, 7, 12, 19, 33, 54, 239, 0]
*/
t = [42, 0];
uredi(t, -1);
console.log(JSON.stringify(t));

/*
[42, 0]
*/
t = [2, 2, 45, 23, 2, 6, 45, 1, 0];
uredi(t, -1);
console.log(JSON.stringify(t));

/*
[45, 45, 23, 6, 2, 2, 2, 1, 0]
*/




function zamenjaj_elementa(t, m, n) {
    var dolzina_tabele = t.length - 1;

    if (m < 0 || n < 0 || m > dolzina_tabele - 1 || n > dolzina_tabele - 1) {
        return -1;
    }

    var tmp_m = t[m];
    t[m] = t[n];
    t[n] = tmp_m;

    return 0;
}

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