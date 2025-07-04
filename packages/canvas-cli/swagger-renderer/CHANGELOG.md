# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [0.0.4](https://github.com/groton-school/canvas-cli/compare/swagger-renderer/0.0.3...swagger-renderer/0.0.4) (2025-06-27)


### Bug Fixes

* honor --operationsDirName ([18d9410](https://github.com/groton-school/canvas-cli/commit/18d9410aca312829504e6e6715e71ea82ce1bfec))
* redesigned bin to be npm-friendly ([0e9955a](https://github.com/groton-school/canvas-cli/commit/0e9955acc85c8a9687054f65c2c69100af78c167))
* resolve @prettier/plugin-xml regression that was breaking formatting ([cdb7b0e](https://github.com/groton-school/canvas-cli/commit/cdb7b0e99b670d67b25cc3ffe681c6c774146800))

## [0.0.3](https://github.com/groton-school/canvas-cli/compare/swagger-renderer/0.0.2...swagger-renderer/0.0.3) (2025-06-21)


### Features

* **canvas-cli.swagger-renderer:** force `V1` to `v1` ([611c7b0](https://github.com/groton-school/canvas-cli/commit/611c7b0a292b5fb4a261ae3f7c61229d95bfc6ad))
* **canvas-cli.swagger-renderer:** simplify upload logic ([1fbab3f](https://github.com/groton-school/canvas-cli/commit/1fbab3f4d2a27db825cf0fffbc86049dfbd53d12))
* support masquerading ([be4c8f9](https://github.com/groton-school/canvas-cli/commit/be4c8f9ceaf9d0e98ee6d56c16bae0f8463f7e36))


### Bug Fixes

* accept numbers or strings interchangeably in Models ([8d1f9e5](https://github.com/groton-school/canvas-cli/commit/8d1f9e560cb418b30dee26e74553121f1d8150f4)), closes [#51](https://github.com/groton-school/canvas-cli/issues/51)
* **canvas-cli.swagger-renderer:** make import conflict error useful ([3dc6d9d](https://github.com/groton-school/canvas-cli/commit/3dc6d9d03f3bbab64f94bf27faae440bc932669e))

## [0.0.2](https://github.com/groton-school/canvas-cli/compare/swagger-renderer/0.0.1...swagger-renderer/0.0.2) (2025-05-10)


### Bug Fixes

* bandaid on incomplete documentation by making searchParams partials ([041fe07](https://github.com/groton-school/canvas-cli/commit/041fe07755aa1008e072bb1939ae08543c6ef4c8))

## 0.0.1 (2025-04-18)


### Features

* **canvas-cli.swagger-renderer:** add Pagination to array return types ([0184e7e](https://github.com/groton-school/canvas-cli/commit/0184e7e487a63f5dcf34d6529e6bb65e545287e3))
* **canvas-cli.swagger-renderer:** de-dupe imports ([51aa8fd](https://github.com/groton-school/canvas-cli/commit/51aa8fda09b67c90a774519a3c1093b3aa3b63ac))
* **canvas-cli.swagger-renderer:** export params from operations ([dc5ebac](https://github.com/groton-school/canvas-cli/commit/dc5ebacaf1d91d925e01733c308641b9bd1813c9))
* **canvas-cli.swagger-renderer:** individual types may have multiple type references ([132038c](https://github.com/groton-school/canvas-cli/commit/132038ce64906c840da09380137f94ea694173e8))
* **canvas-cli.swagger-renderer:** make query and form parameter processing non-strict by default ([ad30d60](https://github.com/groton-school/canvas-cli/commit/ad30d60c3c65ec5b2168dfdbd6798301845d0a16))
* **canvas-cli.swagger-renderer:** module indices ([2935f17](https://github.com/groton-school/canvas-cli/commit/2935f1787f4d6a87d877bced6fc70c8459614d6d))
* **canvas-cli.swagger-renderer:** namespace model index ([a2eafa0](https://github.com/groton-school/canvas-cli/commit/a2eafa01a7a26e1f071c948c9198ae227218d1d7))
* **canvas-cli.swagger-renderer:** namespaces now converts snake_case to CapitalCamelCase ([4d03ccb](https://github.com/groton-school/canvas-cli/commit/4d03ccb21db46529e176b5dad3b01d125ec5d91f))
* **canvas-cli.swagger-renderer:** only include actual parameters ([a19197e](https://github.com/groton-school/canvas-cli/commit/a19197eb8ff2d89648fabe1e6ede74889ae51695))
* **canvas-cli.swagger-renderer:** parameter type separation ([6615a02](https://github.com/groton-school/canvas-cli/commit/6615a0253feb6938b3c6c2896734241d300e0266))
* **canvas-cli.swagger-renderer:** suppress interpretation output ([567c61b](https://github.com/groton-school/canvas-cli/commit/567c61bb2e15c203eac245900e43c15dd8e890b9))
* **canvas-cli.swagger-renderer:** upload files via Canvas.upload() ([9ae3c86](https://github.com/groton-school/canvas-cli/commit/9ae3c8626b01a0de06b232986350c3e212d147e3))


### Bug Fixes

* **canvas-cli.api:** use basePath to calculate full path to endpoint ([333a263](https://github.com/groton-school/canvas-cli/commit/333a2630636c5088eb30951acb488daeece5f5c2))
* **canvas-cli.swagger-renderer:** stop forcing all arrays to string[] ([06f8721](https://github.com/groton-school/canvas-cli/commit/06f87219b723ddd6e98627a14b11e2018b8a5daf))
* **canvas-cli.swagger-renderer:** strict means _strict_ ([fc75980](https://github.com/groton-school/canvas-cli/commit/fc759801adacf652b5bea87e3587f41a8945b668))
