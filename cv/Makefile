# `make` builds the one-page resume and the full CV into build/.
# `make publish` copies them to the site's files/ (Resume.pdf, CV.pdf).
all: build/resume.pdf build/cv.pdf

build/%.pdf: %.tex style.tex
	tectonic $< --outdir build

publish: all
	cp build/resume.pdf ../files/Resume.pdf
	cp build/cv.pdf ../files/CV.pdf

.PHONY: all publish
