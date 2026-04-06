# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [0.0.8](https://github.com/groton-school/canvas-cli/compare/canvas-cli/0.0.7...canvas-cli/0.0.8) (2026-04-06)


### Features

* courseColors calculated using section name, course name, or course code, as available ([a2ce545](https://github.com/groton-school/canvas-cli/commit/a2ce5454ac045e918715df20d20f75909a397a04))


### Bug Fixes

* explicitly (rather than implictly) target Node LTS version ([7140d44](https://github.com/groton-school/canvas-cli/commit/7140d446a12ad17b381a2a7c5427482260067a34))
* show live updates ([438a47e](https://github.com/groton-school/canvas-cli/commit/438a47e6f0150f755245fc32132e48715c26fceb))

## [0.0.7](https://github.com/groton-school/canvas-cli/compare/canvas-cli/0.0.6...canvas-cli/0.0.7) (2026-03-15)


### Features

* fancied up output ([a691a69](https://github.com/groton-school/canvas-cli/commit/a691a69f58980bd96bf1a70a0d0b9b0ae902c825))
* more fun display while assigning course colors ([1517455](https://github.com/groton-school/canvas-cli/commit/1517455bec7affba0dcc2e3e2ca076105a200b8b))
* switch from soon-to-be-deprecated env-1password to env+@1password/sdk ([5c46e4e](https://github.com/groton-school/canvas-cli/commit/5c46e4e63e34667234ee4b0cd1dc15fe9db09204))


### Bug Fixes

* courseColors no longer spins indefinitely when making zero updates ([6ed575f](https://github.com/groton-school/canvas-cli/commit/6ed575f1ffabd6bcd77da4f3be7e3e3f2229daa8))
* overwrite logic now overwrites upon request ([d81c5d4](https://github.com/groton-school/canvas-cli/commit/d81c5d4cf3033d42305fa04a84504b1d458ed92b))
* reduce number of API calls to update course colors ([ce393c0](https://github.com/groton-school/canvas-cli/commit/ce393c09688c9201d2c18058170f802590d094ee))

## [0.0.6](https://github.com/groton-school/canvas-cli/compare/canvas-cli/0.0.5...canvas-cli/0.0.6) (2026-01-15)


### Features

* support 1Password integration ([245bae5](https://github.com/groton-school/canvas-cli/commit/245bae5db4026fb6437c6f52080c5bbddbb2fee6))


### Bug Fixes

* `courses conclude` now uses consistent `accountId` arg ([08bb5f2](https://github.com/groton-school/canvas-cli/commit/08bb5f236ac759c68831187fd93dc3ea13c5f6fd))

## [0.0.5](https://github.com/groton-school/canvas-cli/compare/canvas-cli/0.0.4...canvas-cli/0.0.5) (2026-01-05)


### Features

* conclude available courses in ended terms ([36b1aa5](https://github.com/groton-school/canvas-cli/commit/36b1aa5ea1d40276fdcf7623afc7739d37be0508))
* reset user favorites to only current/future courses where they are not observers ([37179a2](https://github.com/groton-school/canvas-cli/commit/37179a23b2d40d9c1f6d07865d95d4973cd132b2))
* update Node target to active v24 ([5ecece1](https://github.com/groton-school/canvas-cli/commit/5ecece144945861343f008c0d9043ac631b08c34))
* use standard colors on white variant for readability ([f87bafd](https://github.com/groton-school/canvas-cli/commit/f87bafdaefb3a825582f42e36a6b0f954a1e0b68))


### Bug Fixes

* if multiple enrollments, need to check for any that are not observer ([81a3cb7](https://github.com/groton-school/canvas-cli/commit/81a3cb7c625765af192155fd057cd594fe09210d))
* update to use @oauth2-cli/canvas client ([6280f84](https://github.com/groton-school/canvas-cli/commit/6280f84ada72e08a5bf8838b10df06362ce1ef4b))

## [0.0.4](https://github.com/groton-school/canvas-cli/compare/canvas-cli/0.0.3...canvas-cli/0.0.4) (2025-08-01)

Update internal dependencies

## [0.0.3](https://github.com/groton-school/canvas-cli/compare/canvas-cli/0.0.2...canvas-cli/0.0.3) (2025-07-01)

### Features

- output API errors on failure ([1cb41ca](https://github.com/groton-school/canvas-cli/commit/1cb41caa967a43584f5cb75d8934facddcaaf370))

## [0.0.2](https://github.com/groton-school/canvas-cli/compare/canvas-cli/0.0.1...canvas-cli/0.0.2) (2025-06-27)

### Features

- also disable submission_comment notifications by default ([568caae](https://github.com/groton-school/canvas-cli/commit/568caae81585b82660f4d4fca84d0796fe94e4b8))

### Bug Fixes

- redesigned bin to be npm-friendly ([0e9955a](https://github.com/groton-school/canvas-cli/commit/0e9955acc85c8a9687054f65c2c69100af78c167))

## 0.0.1 (2025-06-21)

### Features

- **canvas-cli:** disable categories of notifications for different types of users ([8751403](https://github.com/groton-school/canvas-cli/commit/87514037064365cf791f6e538d234e6668cb03e9))
- **canvas-cli:** match sections to standard @groton/colors ([58d718d](https://github.com/groton-school/canvas-cli/commit/58d718d483f5d41e83c09042cda2a5855fcc66d5))
- **canvas-cli:** user avatars accept sis_user_id as well as user_id ([8683d28](https://github.com/groton-school/canvas-cli/commit/8683d28a17b29770e427e58b6de7417b860a2856))
- support masquerading ([be4c8f9](https://github.com/groton-school/canvas-cli/commit/be4c8f9ceaf9d0e98ee6d56c16bae0f8463f7e36))

### Bug Fixes

- **canvas-cli:** bump @groton/colors to working version ([a30acbd](https://github.com/groton-school/canvas-cli/commit/a30acbdab8bd56f1767b860f94aeb39fcae6fc75))
- **canvas-cli:** fewer lookups and more resilient to mismatches ([4964b40](https://github.com/groton-school/canvas-cli/commit/4964b4089bd13ca1d24535d4976fea74e5ee2d15))
- **canvas-cli:** import src path for Notifications module ([fd32055](https://github.com/groton-school/canvas-cli/commit/fd3205503a0eca45e055861c368a5a6f224fc7f8))
- **canvas-cli:** load env more successfully ([4dc2f98](https://github.com/groton-school/canvas-cli/commit/4dc2f98deb99f46b838a09220f27640d87c3da43))
