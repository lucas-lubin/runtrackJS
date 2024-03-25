function estPremier(nombre) {
    if (nombre < 2) {
        return false; // 0 et 1 ne sont pas des nombres premiers
    }
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false; // Le nombre a un diviseur autre que 1 et lui-même
        }
    }
    return true; // Le nombre est premier
}

function sommeNombresPremiers(nombre1, nombre2) {
    if (estPremier(nombre1) && estPremier(nombre2)) {
        return nombre1 + nombre2; // Les deux nombres sont premiers, retourner leur somme
    } else {
        return false; // Au moins un des nombres n'est pas premier
    }
}

// Exemples d'utilisation
console.log(sommeNombresPremiers(3, 5)); // 8
console.log(sommeNombresPremiers(4, 7)); // false
console.log(sommeNombresPremiers(11, 13)); // 24