function tri(numbers, order) {
    // Vérifier si le paramètre 'order' est valide
    if (order !== 'asc' && order !== 'desc') {
        console.error('Le paramètre "order" doit être "asc" ou "desc".');
        return;
    }

    // Trier le tableau en fonction du paramètre 'order'
    if (order === 'asc') {
        return numbers.sort((a, b) => a - b);
    } else { // order === 'desc'
        return numbers.sort((a, b) => b - a);
    }
}

// Exemples d'utilisation
const numbersAsc = [5, 2, 8, 1];
const numbersDesc = [5, 2, 8, 1];

console.log(tri(numbersAsc, 'asc')); // [1, 2, 5, 8]
console.log(tri(numbersDesc, 'desc')); // [8, 5, 2, 1]