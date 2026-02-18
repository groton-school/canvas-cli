# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [0.5.0](https://github.com/groton-school/canvas-cli/compare/oauth2-cli/canvas/0.4.4...oauth2-cli/canvas/0.5.0) (2026-02-18)


### ⚠ BREAKING CHANGES

* update to @oauth2-cli/qui-cli@0.6.x
* update to @oauth2-cli/qui-cli@0.6.0 with gcrtl support

### Features

* export plugin instance as Canvas.plugin ([a15b0c7](https://github.com/groton-school/canvas-cli/commit/a15b0c715580f50fea28107938df06d7717da043))
* log instance URL ([7fa4107](https://github.com/groton-school/canvas-cli/commit/7fa41071175cad07874cb452065830f2284387ab))
* switch from soon-to-be-deprecated env-1password to env+@1password/sdk ([5c46e4e](https://github.com/groton-school/canvas-cli/commit/5c46e4e63e34667234ee4b0cd1dc15fe9db09204))
* update to @oauth2-cli/qui-cli@0.6.0 with gcrtl support ([e5febe6](https://github.com/groton-school/canvas-cli/commit/e5febe6d4acd754b895c695f2ff0549623cf4ee3))
* update to @oauth2-cli/qui-cli@0.6.x ([8d6fe24](https://github.com/groton-school/canvas-cli/commit/8d6fe247da0f5ef9d62baa6ec063bb40a484dcb6))


### Bug Fixes

* send version and platform information with User-Agent header ([07ef0c8](https://github.com/groton-school/canvas-cli/commit/07ef0c8617b3fbbcdfdc774a28b39335d7c9f7d3))
* update to @qui-cli/env@5.1 with optional [@1password-sdk](https://github.com/1password-sdk) integration ([12c4b96](https://github.com/groton-school/canvas-cli/commit/12c4b9673dee783a13a4e65936f01f1128696d2e))
* use @oauth2-cli/qui-cli's `Unregistered` namespace ([9653002](https://github.com/groton-school/canvas-cli/commit/9653002f75baf31260992f1cd1250276ad3c055a))

## [0.4.4](https://github.com/groton-school/canvas-cli/compare/oauth2-cli/0.4.3...oauth2-cli/0.4.4) (2026-01-17)


### Features

* add scope support ([f5bb9f5](https://github.com/groton-school/canvas-cli/commit/f5bb9f57cffac92350c9007179fe5d7a8b374c72))

## [0.4.3](https://github.com/groton-school/canvas-cli/compare/oauth2-cli/0.4.2...oauth2-cli/0.4.3) (2026-01-15)


### Bug Fixes

* correctly initialize authorization and token endpoints ([f87a3ff](https://github.com/groton-school/canvas-cli/commit/f87a3ffba249de15e3ce61204bea5730905091ec))
* further reorg of internals ([45b5228](https://github.com/groton-school/canvas-cli/commit/45b5228d3ab92d4a313e67bd6df017262421eae0))

## [0.4.2](https://github.com/groton-school/canvas-cli/compare/oauth2-cli/0.4.1...oauth2-cli/0.4.2) (2026-01-14)


### Features

* compile against Node.js v24 ([2e944b3](https://github.com/groton-school/canvas-cli/commit/2e944b367a8ed5afee3eadea52d4ac7802530e06))
* export Canvas as ESM module ([1d30590](https://github.com/groton-school/canvas-cli/commit/1d305904de5ccb5930c6ab8061396e4dbb67a6b8))

## [0.4.1](https://github.com/groton-school/canvas-cli/compare/oauth2-cli/0.4.0...oauth2-cli/0.4.1) (2026-01-05)


### Features

* total rewrite of internals to simplify support/design ([488a0d6](https://github.com/groton-school/canvas-cli/commit/488a0d622f6fa9e49109de516ed3ffd7b98883cc))
* update Node target to active v24 ([5ecece1](https://github.com/groton-school/canvas-cli/commit/5ecece144945861343f008c0d9043ac631b08c34))

## [0.4.0](https://github.com/groton-school/canvas-cli/compare/oauth2-cli/0.3.2...oauth2-cli/0.4.0) (2025-12-20)


### ⚠ BREAKING CHANGES

* use native Fetch API

### Features

* send User-Agent header with requests ([da085f3](https://github.com/groton-school/canvas-cli/commit/da085f311caefafb9b5d1b18f66624115670db33))
* use native Fetch API ([6f86830](https://github.com/groton-school/canvas-cli/commit/6f86830449302d12bb5f16d81741cf3a534e9b9e))

## [0.3.2](https://github.com/groton-school/canvas-cli/compare/oauth2-cli/0.3.1...oauth2-cli/0.3.2) (2025-05-31)

## [0.3.1](https://github.com/groton-school/canvas-cli/compare/oauth2-cli/0.2.1...oauth2-cli/0.3.1) (2025-05-31)


### Bug Fixes

* bumping version to suppress bad 0.3.0 release ([8fdba8c](https://github.com/groton-school/canvas-cli/commit/8fdba8c26c1b913308d6de2937788b9d4d4ee8fa))

## [0.2.1](https://github.com/groton-school/canvas-cli/compare/oauth2-cli/0.2.0...oauth2-cli/0.2.1) (2025-04-18)


### Features

* **canvas:** rawFetch() ([dc8fc9c](https://github.com/groton-school/canvas-cli/commit/dc8fc9ce904f2b327515533a897568d31892ae5f))

## [0.2.0](https://github.com/battis/oauth2-cli/compare/canvas/0.1.1...canvas/0.2.0) (2025-03-09)

### Features

- **oauth2-cli:** detect and warn about reused localhost ports ([3431d84](https://github.com/battis/oauth2-cli/commit/3431d84d47251dd9fba47b23bbfd3dcf653fc7d3))

### Bug Fixes

- **oauth2-configure:** remove redundant caching ([7294e6a](https://github.com/battis/oauth2-cli/commit/7294e6a7aec373f72abc7c9e7c2ce4c659e3cba5))

## [0.1.1](https://github.com/battis/oauth2-cli/compare/canvas/0.1.0...canvas/0.1.1) (2025-03-08)

### Bug Fixes

- **canvas:** copy pasta fixed ([5694d34](https://github.com/battis/oauth2-cli/commit/5694d349fb03115138ef31f2f015614fcc060c1f))

## 0.1.0 (2025-03-08)

### Features

- **canvas:** initial release ([9a6cf6c](https://github.com/battis/oauth2-cli/commit/9a6cf6caca0d22b542ad1b30444940e828d044fe))
