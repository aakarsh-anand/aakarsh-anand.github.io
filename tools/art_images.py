"""Make web-sized, metadata-free WebP copies of artwork photos.

For each piece: the finished painting at 2000 px (plus a 720 px thumbnail for the gallery) and each
process photo at 1200 px, written to images/art/<slug>/. EXIF (including GPS) is dropped and phone
rotation flags are applied to the pixels. Needs Pillow:  pip install pillow

    python tools/art_images.py <slug> <final.jpg> [process1.jpg process2.jpg ...]
"""
import sys
from pathlib import Path
from PIL import Image, ImageOps

OUT = Path(__file__).resolve().parent.parent / "images" / "art"


def save(src, dest, long_edge, quality):
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im).convert("RGB")
        im.thumbnail((long_edge, long_edge), Image.LANCZOS)
        im.save(dest, "WEBP", quality=quality, method=6)  # no exif= argument, so no metadata
        return im.size


def main(slug, final, *process):
    out = OUT / slug
    out.mkdir(parents=True, exist_ok=True)
    w, h = save(final, out / "final.webp", 2000, 82)
    save(final, out / "thumb.webp", 720, 78)
    for i, src in enumerate(process, 1):
        save(src, out / f"{i:02d}.webp", 1200, 74)
    print(f"{slug}: final {w}x{h}, {len(process)} process photos")


if __name__ == "__main__":
    main(*sys.argv[1:])
