# @groovox/database

This contains the code for generating prisma client for Groovox.

## Scripts

### introspect

Introspect database to generated `schema.prisma`.
Only used after database schema is changed.

First, `schema.prisma` is created with the follow content:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

### case

Convert `schema.prisma` to pascal case.

### generate

Generate code for `@prisma/client` from `schema.prisma`.
