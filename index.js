//
// index.js
//
async function main() {
    try {
        // Import and initialize the WASM module
        const wasmModule = await import('./pkg/reader.js');
        await wasmModule.default();
        const nameInput = document.getElementById('nameInput');
        const helloButton = document.getElementById('helloButton');
        const outputDiv = document.getElementById('output');
        helloButton.addEventListener('click', () => {
            const name = nameInput.value.trim();
            if (name) {
                const output = wasmModule.hello(name);
                outputDiv.textContent = output;
            } else {
                outputDiv.textContent = "Please enter a name!";
            }
        });
        console.log("RustReader app loaded and ready!");

    } catch (e) {
        console.error("Error loading or running WASM:", e);
        document.getElementById('output').textContent = "Error loading app. Check console.";
    }
}

main();