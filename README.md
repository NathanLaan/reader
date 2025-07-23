# Reader

An RSS feed reader implemented using Rust WASM.

- The app is hosted in a Git Pages site.
- The app data storage consists of files stored in a Git repo.
- The app configuration consists only of a Git repo URL and a Git repo access token.
- The app stores the feed list within the Git repo contained at the Git repo URL.
- The app stores items fetched from each feed in the feed list within the Git repo contained at the Git repo URL.
- The app stores tracks items that have been viewed/read in the Git repo contained at the Git repo URL.

## TODO

- [ ] Implement GitHub Action to build and deploy. Currently building `pkg` locally and upload to the repo.

## Dev Environment Setup

Development environment setup steps, assuming Rust is already setup:

```bash
rustup target add wasm32-unknown-unknown
cargo install wasm-pack
```

## WASM Build

WASM build steps:

```bash
wasm-pack build --target web
rm pkg/.gitignore
```

## GitHub Pages Deploy

GitHub Pages configuration steps:

1. Navigate to `Settings -> Pages`.
2. Under `Source` select `Deploy from a branch`.
3. Under `Branch` select `main` and `/root`.
4. Click `Save`.

## References

- [git2-rs](https://github.com/rust-lang/git2-rs): Rust bindings for `libgit2`.
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
