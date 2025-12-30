let a = 5; // 0101 in binary
let b = 3; // 0011 in binary

console.log("a:", a, "b:", b);

// AND (&)
console.log("a & b =", a & b); // 0101 & 0011 = 0001 → 1

// OR (|)
console.log("a | b =", a | b); // 0101 | 0011 = 0111 → 7

// XOR (^)
console.log("a ^ b =", a ^ b); // 0101 ^ 0011 = 0110 → 6

// NOT (~)
console.log("~a =", ~a); // ~0101 = 1010 (two's complement) → -6

// Left shift (<<)
console.log("a << 1 =", a << 1); // 0101 << 1 = 1010 → 10

// Right shift (>>)
console.log("a >> 1 =", a >> 1); // 0101 >> 1 = 0010 → 2

// Unsigned right shift (>>>)
console.log("a >>> 1 =", a >>> 1); // 0101 >>> 1 = 0010 → 2
