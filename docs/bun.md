---
sidebar_position: 2
---

# Bun interesting stuff

#### env variables
So bun seems to ignore the $ sign, my colleague tried to set a environment variable in the container which had $ as well in it's value.

The solution was to use a forward slash to in front of $, eg asdf\%12@adx, this resolved the issue.

#### bun lock file
The v2 update of bun has discarded the binary lockfile and embraced the json-text based lockfile that npm uses. It's a welcome move forward.