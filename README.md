# aakarsh-anand.github.io

Personal site of Aakarsh Anand, built with Jekyll and served by GitHub Pages.

## Preview locally

```bash
bundle install
bundle exec jekyll serve --livereload   # then open http://127.0.0.1:4000
```

## Where things live

| What | Where |
| --- | --- |
| Home page text and research summary | `index.md` |
| Publication list (home page picks those marked `selected`) | `_data/publications.yml` |
| News items on the home page | `_data/news.yml` |
| CV page | `cv.md` |
| Paintings, one file each | `_art/`, with images in `images/art/<folder>/` |
| Page templates and styles | `_layouts/`, `_includes/`, `assets/site/` |
| CV and one-page resume (LaTeX) | `cv/` |

## Common updates

- **New paper or news item:** add an entry at the top of `_data/publications.yml` or `_data/news.yml`.
- **Resume or CV:** edit `cv/resume.tex` or `cv/cv.tex`, run `make -C cv` to preview in `cv/build/`, then
  `make -C cv publish` to copy both PDFs into `files/`.
- **New painting:** run `python tools/art_images.py <folder> <final.jpg> <process photos...>` (needs
  `pip install pillow`). It writes web-sized WebP files with location metadata removed. Then add a file to
  `_art/` modeled on the existing ones.
