import { build } from '@battis/qui-cli.structured';

await build({
  fileName: import.meta.filename,
  commandName: 'swagger-renderer'
});
