#!/bin/sh
# Print the page count of each PDF given (macOS PDFKit; no extra tools needed).
for f in "$@"; do
  n=$(osascript -l JavaScript -e "ObjC.import('PDFKit'); \$.PDFDocument.alloc.initWithURL(\$.NSURL.fileURLWithPath('$(cd "$(dirname "$f")" && pwd)/$(basename "$f")')).pageCount")
  echo "$f: $n page(s)"
done
