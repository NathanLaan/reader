///
/// Rust Reader WASM
///

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    ///
    /// The `log` function is bound to the JavaScript `console.log`.
    ///
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

}

#[wasm_bindgen]
pub fn hello(name: &str) -> String {
    let output = format!("Hello {}!", name);
    log(&output);
    output
}
