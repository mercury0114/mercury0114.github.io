const Encryption = {
    async decrypt(encryptedBytes, key) {
        const salt = encryptedBytes.slice(0, 16);
        const counter = encryptedBytes.slice(16, 32);
        const ciphertext = encryptedBytes.slice(32);

        const keyMaterial = await crypto.subtle.importKey(
            "raw",
            new TextEncoder().encode(String(key)),
            "PBKDF2",
            false,
            ["deriveKey"]
        );
        const ctrKey = await crypto.subtle.deriveKey(
            { name: "PBKDF2", salt: salt, iterations: 100000, hash: "SHA-256" },
            keyMaterial,
            { name: "AES-CTR", length: 256 },
            false,
            ["decrypt"]
        );
        return new Uint8Array(
            await crypto.subtle.decrypt(
                { name: "AES-CTR", counter: counter, length: 64 },
                ctrKey,
                ciphertext
            )
        );
    },
};
