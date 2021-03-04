function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

test = disemvowel("Barney");
test;
