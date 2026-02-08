# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## 0.1.1 (2026-02-08)


### Features

* allow (dangerously) overwriting existing Canvas data ([15ec288](https://github.com/groton-school/canvas-cli/commit/15ec28876a579507b4652f9235580e0cd5b2656f))
* allow SIS ID mapping to override SIS ID prefix and/or default account for courses ([c0128c0](https://github.com/groton-school/canvas-cli/commit/c0128c08c369dd387ca64efc7d0d68f30e5cee75))
* **canvas-import,types.import:** add local file-hashing to avoid uploading duplicate files ([847ef3d](https://github.com/groton-school/canvas-cli/commit/847ef3d218697dee2f4bfe70130482e346272d3c))
* **canvas-import:** display file icon next to downloads ([a154429](https://github.com/groton-school/canvas-cli/commit/a154429b9efa8a77accc27d6ba9e78b3a99d5837))
* **canvas-import:** generated gallery pages prefixed with name of source page ([337f6f7](https://github.com/groton-school/canvas-cli/commit/337f6f7ef6d13484c85a39242ae68718d4ee4fe5))
* **canvas-import:** import rubrics ([98a0061](https://github.com/groton-school/canvas-cli/commit/98a0061c52d67f2a32787229090ae27af50e8373))
* **canvas-import:** improved album parsing, assignment widgets rendered ([9dc29d1](https://github.com/groton-school/canvas-cli/commit/9dc29d1e4f6571de9adcc9cc171efa1eafb5d7b3))
* **canvas-import:** zoom in on downscaled images on gallery pages ([72fd158](https://github.com/groton-school/canvas-cli/commit/72fd1581cd6ea6dd1657884cdf225f7e984ac52f))
* create "Import Workspace" account as well as term (if not already present) ([b540c8e](https://github.com/groton-school/canvas-cli/commit/b540c8e29b84944d456b02af6392c85ef2d73f43))
* create missing teachers with name and sis_user_id ([ca4e506](https://github.com/groton-school/canvas-cli/commit/ca4e506f4c300b2cda1dbd2ad86ab3612fb5ff2a))
* extensive output logging enhancements ([6639c43](https://github.com/groton-school/canvas-cli/commit/6639c433f2d940638f02a4ec91ed9f51402ad1dd))
* incremental updates to index file as courses are imported ([4f0d291](https://github.com/groton-school/canvas-cli/commit/4f0d29169d663012d3c5e73c2062c7f9beebec32))
* optionally skip teacherless sections (likely community groups) ([1e807e2](https://github.com/groton-school/canvas-cli/commit/1e807e260ffe1784efe581b5f265eb2e3e560968))
* support 1Password integration ([245bae5](https://github.com/groton-school/canvas-cli/commit/245bae5db4026fb6437c6f52080c5bbddbb2fee6))
* switch from soon-to-be-deprecated env-1password to env+@1password/sdk ([5c46e4e](https://github.com/groton-school/canvas-cli/commit/5c46e4e63e34667234ee4b0cd1dc15fe9db09204))
* teachers created during import are created suspended to limit seat count ([9b28309](https://github.com/groton-school/canvas-cli/commit/9b2830915dca934367c6205d99a13ae1167d091c))
* treat courses as duplicates only if assignments and/or pages are already present ([f26ebd2](https://github.com/groton-school/canvas-cli/commit/f26ebd25fe349df04e74fbaeff2567a165a76688))
* update Node target to active v24 ([5ecece1](https://github.com/groton-school/canvas-cli/commit/5ecece144945861343f008c0d9043ac631b08c34))
* update to use @groton-school/canvas-api.client.qui-cli ([0f6d604](https://github.com/groton-school/canvas-cli/commit/0f6d6049e50c148dc91e2c745c78edf92ee857a7))


### Bug Fixes

* assignments without a category go into the default assignments group ([b4a3127](https://github.com/groton-school/canvas-cli/commit/b4a3127b99acfbe3bfcbe3430bdab8d9b15b6edf))
* **canvas-import,types.import:** store canvas rubric data in exported index file ([4a83759](https://github.com/groton-school/canvas-cli/commit/4a83759eb5273addc3297ec77f74a85875df55d0))
* clarify duplicate course options ([a88d98b](https://github.com/groton-school/canvas-cli/commit/a88d98bfcada3751f760956a75c1206be3c48fb5)), closes [#13](https://github.com/groton-school/canvas-cli/issues/13)
* correct `cls` prefix for Blackbaud-generated OneRoster course IDs ([ad08413](https://github.com/groton-school/canvas-cli/commit/ad084136898062223cf63237f55eb6e4131af429))
* disambiguate --ignoreErrors ([1b81d3b](https://github.com/groton-school/canvas-cli/commit/1b81d3b57991019752151aead0e6dc83ca172c55))
* do not attempt to import nameless assignments ([14fda9d](https://github.com/groton-school/canvas-cli/commit/14fda9d3a95aea5ddb91c76cde7cd173991e84c7))
* do not overwrite existing canvas-import.json file ([a4fcc1b](https://github.com/groton-school/canvas-cli/commit/a4fcc1b8e4e8e13fa0fae0770945f14ed55d5f33))
* do not overwrite original index, add canvas-import.json ([d574541](https://github.com/groton-school/canvas-cli/commit/d574541a014a4d4802519d01d49a8a9a72b8f4c6))
* do not overwrite preferences when browsing a duplicate course ([6bb39a9](https://github.com/groton-school/canvas-cli/commit/6bb39a9257230ec5e688cf7efc2a095b3a12545b))
* log final course URL ([fc95a4d](https://github.com/groton-school/canvas-cli/commit/fc95a4d4b8e0d9530697c8095060331746c759b7))
* log term name when course is moved to proper term ([5368562](https://github.com/groton-school/canvas-cli/commit/536856215b9264b829df30a2931579b5fda6b1ab))
* match terms more specifically by starting term ID and length ([dd457d6](https://github.com/groton-school/canvas-cli/commit/dd457d6145d56d4da0c16d095991ba5a78352aea))
* more flexible failure mode when trying to re-import partially imported snapshot index ([7e67a52](https://github.com/groton-school/canvas-cli/commit/7e67a525b919542af1232c00879cf9c023723fbc))
* redesigned bin to be npm-friendly ([0e9955a](https://github.com/groton-school/canvas-cli/commit/0e9955acc85c8a9687054f65c2c69100af78c167))
* rubric criterion ratings need to be an indexed hash ([ad9da78](https://github.com/groton-school/canvas-cli/commit/ad9da788033e173d89f9653ae928ae738ffc0c47))
* start all courses in Import Workspace term to avoid errors ([3f0e690](https://github.com/groton-school/canvas-cli/commit/3f0e690f2966b72d5357e80eb6dbacd973b003b1))
* temporarily move all courses to import workspace term to avoid enrollment in concluded courses ([89cc589](https://github.com/groton-school/canvas-cli/commit/89cc589826999552d72445aedfd36fb57650f2e5))
* test for existence of downloaded file (not every file was available from Blackbaud) ([06d68de](https://github.com/groton-school/canvas-cli/commit/06d68de083da7db63babb4f1063f0aa0e9306638))
* update to use @oauth2-cli/canvas client ([6280f84](https://github.com/groton-school/canvas-cli/commit/6280f84ada72e08a5bf8838b10df06362ce1ef4b))
* warn if course has no teacher enrolled ([ce8411a](https://github.com/groton-school/canvas-cli/commit/ce8411a9e54cfc2baa908aefe13db22bbe2345eb))

## 0.1.0 (2025-04-18)


### Features

* **canvas-import,types.import:** add local file-hashing to avoid uploading duplicate files ([847ef3d](https://github.com/groton-school/canvas-import/commit/847ef3d218697dee2f4bfe70130482e346272d3c))
* **canvas-import:** display file icon next to downloads ([a154429](https://github.com/groton-school/canvas-import/commit/a154429b9efa8a77accc27d6ba9e78b3a99d5837))
* **canvas-import:** generated gallery pages prefixed with name of source page ([337f6f7](https://github.com/groton-school/canvas-import/commit/337f6f7ef6d13484c85a39242ae68718d4ee4fe5))
* **canvas-import:** import rubrics ([98a0061](https://github.com/groton-school/canvas-import/commit/98a0061c52d67f2a32787229090ae27af50e8373))
* **canvas-import:** improved album parsing, assignment widgets rendered ([9dc29d1](https://github.com/groton-school/canvas-import/commit/9dc29d1e4f6571de9adcc9cc171efa1eafb5d7b3))
* **canvas-import:** zoom in on downscaled images on gallery pages ([72fd158](https://github.com/groton-school/canvas-import/commit/72fd1581cd6ea6dd1657884cdf225f7e984ac52f))


### Bug Fixes

* **canvas-import,types.import:** store canvas rubric data in exported index file ([4a83759](https://github.com/groton-school/canvas-import/commit/4a83759eb5273addc3297ec77f74a85875df55d0))
