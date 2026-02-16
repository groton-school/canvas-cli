# swagger-spec-ts

Translation of Swagger specification to TypeScript objects

[![npm version](https://badge.fury.io/js/swagger-spec-ts.svg)](https://badge.fury.io/js/swagger-spec-ts)
[![Module type: ESM](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://nodejs.org/api/esm.html)

Currently supprts Swagger v1.2

## Install

```sh
npm install swagger-spec-ts
```

## Usage

```ts
import * as SwaggerSpec from 'swagger-pec-ts';
import fs from 'node:fs';

const spec = JSON.parse(
  fs.readFileSync('path/to/spec.json', 'utf8')
) as SwaggerSpec.v1p2.ApiDeclaration;
```
