# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [0.1.5](https://github.com/groton-school/canvas-cli/compare/canvas-import/0.1.4...canvas-import/0.1.5) (2026-04-28)


### Bug Fixes

* update to latest [@qui-cli](https://github.com/qui-cli) version ([bece837](https://github.com/groton-school/canvas-cli/commit/bece837e3debfe07462abefe69c2e26c1b7042c4))

## [0.1.4](https://github.com/groton-school/canvas-cli/compare/canvas-import/0.1.3...canvas-import/0.1.4) (2026-04-27)


### Features

* generate visual table of contents for topics module ([726a305](https://github.com/groton-school/canvas-cli/commit/726a305961a60d4af884ef22abd733eae764f10c))
* number untitled topics pages ([a4f0933](https://github.com/groton-school/canvas-cli/commit/a4f09334421919eb5371e058ab4fbeced2236d1e))
* read canvasStudioIndex from env var CANVAS_STUDIO_INDEX ([4c3736d](https://github.com/groton-school/canvas-cli/commit/4c3736ddf35a5a3950c56d619157829d8a04afdf))
* select individual group(s) using --groupId option ([668327a](https://github.com/groton-school/canvas-cli/commit/668327a81f514998aed189935f0787a8baabbbfe))


### Bug Fixes

* addressed a number of logic errors in topics toc creation and updating ([1d0e919](https://github.com/groton-school/canvas-cli/commit/1d0e9191f04b29d3e2dd86ad98e17917a61b7cbf))
* export types ([6ba30e2](https://github.com/groton-school/canvas-cli/commit/6ba30e2c604dc10ed7c1d4ad56fafdc3abac1c26))
* image and topics TOC template fixes for consistency and resilience ([ecf6f64](https://github.com/groton-school/canvas-cli/commit/ecf6f64d3443b3d21a1964d57a3a2da619027b02))
* move courses back to term they were found in ([46fe140](https://github.com/groton-school/canvas-cli/commit/46fe1402fb21d75b2a9cd6c56e4bdb1a323606a4))

## [0.1.3](https://github.com/groton-school/canvas-cli/compare/canvas-import/0.1.2...canvas-import/0.1.3) (2026-04-06)


### Bug Fixes

* add spinner to (lengthy) file hash calculations ([d256305](https://github.com/groton-school/canvas-cli/commit/d25630508efb54fdb49ae5799bfff9c31e9cc559))
* additional index write after file hashes are calculated, to avoid _that_ wait repeating ([fa5b6d0](https://github.com/groton-school/canvas-cli/commit/fa5b6d0ce08fd5995607cddd63acbd9eb560ddd9))
* catch "uploaded" Google Docs, Sheets, Slides, Forms ([843fe90](https://github.com/groton-school/canvas-cli/commit/843fe906c5bde81fb6add7e79078fbd70558937b))
* explicitly (rather than implictly) target Node LTS version ([7140d44](https://github.com/groton-school/canvas-cli/commit/7140d446a12ad17b381a2a7c5427482260067a34))
* if video exists and can't be replaced, don't reupload ([1707503](https://github.com/groton-school/canvas-cli/commit/17075039a7b4b20e6fe0e392d54a6b8662b02606))
* more consistent log wording ([626a20a](https://github.com/groton-school/canvas-cli/commit/626a20aa926e4a316d854bdb93b94585e7a4a3ec))
* on ignoreErrors, failed courses written to index up to error ([e76a308](https://github.com/groton-school/canvas-cli/commit/e76a308120f0494cc1eae2701284b37f6506c731))
* publish Topics module ([3464c22](https://github.com/groton-school/canvas-cli/commit/3464c2203b947115b235f53eb88f504bdf4ed43b))
* reduce number of layers of errors ([9f7ac0c](https://github.com/groton-school/canvas-cli/commit/9f7ac0c0652ce4df596725561a8aa94a56b606cf))
* resilient to not-yet-uploaded data URIs from failed runs ([5010145](https://github.com/groton-school/canvas-cli/commit/5010145bd1aaca7b8f35336c5493bdd35fb331b4))
* test for all video formats accepted by Canvas Studio ([a09dd8e](https://github.com/groton-school/canvas-cli/commit/a09dd8ea647c1c8d2c8cbddd7488b534ecaffcca))
* use login_id rather than email to find users in Canvas Studio ([c3c1f0d](https://github.com/groton-school/canvas-cli/commit/c3c1f0d5d2b49008deaa7dfa8e73cb89546c4b9b))

## [0.1.2](https://github.com/groton-school/canvas-cli/compare/canvas-import/0.1.1...canvas-import/0.1.2) (2026-03-15)


### Features

* collect topic pages in a Topics module ([a0a27bb](https://github.com/groton-school/canvas-cli/commit/a0a27bbd0815db6fef31c556f7d4ba6059625bc7))
* embed Canvas Studio videos in pages and assignments ([2cb0888](https://github.com/groton-school/canvas-cli/commit/2cb088878906f9f4507bc7f43b49bba29d73dd7c))
* expand storage quota for courses with too many files ([68a96fe](https://github.com/groton-school/canvas-cli/commit/68a96fec0bb668f471c8770ebf5f1f73244433fa))
* filter by SIS course ID prefix (e.g. `cls`) ([3e1262f](https://github.com/groton-school/canvas-cli/commit/3e1262f96f77e38c2ac315aa9192fa03fbb2276b))
* maintain external index of SHA1 hashes of videos uploaded to Canvas Studio ([9b8c609](https://github.com/groton-school/canvas-cli/commit/9b8c609fe07adf721c252a1b7e85c145ad0f78cc))
* reduce size of pages by externalizing data URIs to image file ([bdaffdf](https://github.com/groton-school/canvas-cli/commit/bdaffdf5c401f1943cb963b3d13924c28d092244))
* skipTo specific GroupId ([95cf048](https://github.com/groton-school/canvas-cli/commit/95cf04807315065f6245c7baec5b31aa59d6f2ac))
* upload videos to Canvas Studio as teacher, if possible ([552ba91](https://github.com/groton-school/canvas-cli/commit/552ba91109bfe1865d2457e676344537af379d28))
* upload videos to Canvas Studio, rather than as file attachments ([1605e5e](https://github.com/groton-school/canvas-cli/commit/1605e5ea3fa82403b703b872f77ce99fdf99a381))


### Bug Fixes

* do not set `auto_caption` ([45b8c45](https://github.com/groton-school/canvas-cli/commit/45b8c4555f5d5f527b3d760f64f8230a6eebfada))
* fully converted to Core.Positionals ([09e1e14](https://github.com/groton-school/canvas-cli/commit/09e1e14175cb22ece9d56292311ec320c24aec32))
* handle @msar/archive errors more gracefully when rendering Canvas pages ([b9e918b](https://github.com/groton-school/canvas-cli/commit/b9e918b3f193dd2df5114fad90afe4aa922cba55))
* improve update log clarity ([7676c45](https://github.com/groton-school/canvas-cli/commit/7676c45c9fee316b36165bff76883aff1c979ce4))
* include skipped sections in intermediate writes ([4e180ca](https://github.com/groton-school/canvas-cli/commit/4e180ca5bbcd3ff9576e98beea8e40e8caaea9e6))
* more consistent course-level logging ([b577a41](https://github.com/groton-school/canvas-cli/commit/b577a416b2fddff7e6bc3831d451c4986a55c01f))
* more durable data URI filenaming as hashes ([7471b4f](https://github.com/groton-school/canvas-cli/commit/7471b4fd2ef8601bd859624481a58f7bcddc2ca9))
* remove another redundant logging error around resetting courses ([146f100](https://github.com/groton-school/canvas-cli/commit/146f1002ce52f7ed92832a6f4795f11ea394e5b6))
* remove redundant logging on reset ([0233a26](https://github.com/groton-school/canvas-cli/commit/0233a26dae0ccf34e23b7ecfc67907740c314677))
* render unknown content as comments invisibly ([bb3b8c6](https://github.com/groton-school/canvas-cli/commit/bb3b8c695ea88b8669e7ce8853f01730a46d292e))
* stream files to calculate hashes (safer for large files) ([f36ecfe](https://github.com/groton-school/canvas-cli/commit/f36ecfe77775f3fdb2340a54f41c4f2c3d88eaf8))
* tolerate seemingly untitled Podium pages (how?) ([1935850](https://github.com/groton-school/canvas-cli/commit/19358509940837b1b3b0cd764876397167270cb2))
* track course/workspace user while uploading files ([c743ebe](https://github.com/groton-school/canvas-cli/commit/c743ebe2437bf506146fea1bf0d1cb8b9cafc8aa))
* use upload spinners as a reassuring sign of life ([69ebf71](https://github.com/groton-school/canvas-cli/commit/69ebf71685936888f11e38a0ec67185a0017453e))

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
