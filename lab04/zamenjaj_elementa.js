function  zamenjaj_elementa(t, m, n) {
    var dolzina_tabele = t.length - 1;

    if (m < 0 || n < 0 || m > dolzina_tabele - 1 || n > dolzina_tabele - 1) {
        return -1;
    }

    var tmp_m = t[m];
    t[m] = t[n];
    t[n] = tmp_m;

   return 0;
}

t = [3, 56, 1, 8, 0];
odziv = zamenjaj_elementa(t, 0, 2);
console.log(odziv, JSON.stringify(t));

/*
0 [1, 56, 3, 8, 0]
*/
t = [23, 7, 12, 9, 728, 0];
odziv = zamenjaj_elementa(t, 4, 2);
console.log(odziv, JSON.stringify(t));

/*
0 [23, 7, 728, 9, 12, 0]
*/
t = [3, 6, 1, 9, 0];
odziv = zamenjaj_elementa(t, 1, 2);
console.log(odziv, JSON.stringify(t));

/*
0 [3, 1, 6, 9, 0]
*/
t = [4, 7, 8, 12, 5, 0];
odziv = zamenjaj_elementa(t, 1, 5);
console.log(odziv, JSON.stringify(t));

/*
-1 [4, 7, 8, 12, 5, 0]
*/
t = [2, 1, 0];
odziv = zamenjaj_elementa(t, -2, 0);
console.log(odziv, JSON.stringify(t));

/*
-1 [2, 1, 0]
*/

t = [1, 2, 3, 4, 5, 6, 0];
odziv = zamenjaj_elementa(t, 3, 3);
console.log(odziv, JSON.stringify(t));
/*
0 [1, 2, 3, 4, 5, 6, 0]
*/

