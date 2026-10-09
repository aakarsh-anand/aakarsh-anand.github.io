---
layout: home
title: Aakarsh Anand
redirect_from:
  - /about/
  - /about.html
intro: |
  I'm a PhD student in computer science at UCLA, advised by [Sriram Sankararaman](https://sriramlab.dgsom.ucla.edu/). I build foundation models and statistical methods for biobank-scale health data. I use both to understand the biology behind disease.

  My work is supported by an NIH T32 fellowship and an Anthropic AI for Science grant. Outside research, I paint ([a few pieces are here](/art/)), play piano and French horn, and dance hip-hop.
---

## Research

Biobanks now pair genomes with many kinds of health data for hundreds of thousands of people, including wearable sensors, medical imaging, lung function tests, blood biomarkers, and health records. I build foundation models that learn from these data and statistical genetics methods that find how genes shape health and disease.

My recent modeling work is on wearable sensors. I co-led [Inertia-1](https://arxiv.org/abs/2607.06617) (NeurIPS 2026) with [Yuzhe Yang's lab](https://yang-ai-lab.github.io/), an open study of how to pretrain motion foundation models on 18 million hours of accelerometry. Our follow-up study tests the model on diagnosis, prognosis, and disease progression, and measures how much genetic signal its learned representations share with disease.

To tie modeling and genetics together more directly, I'm developing a training loss that pushes a model's learned traits to be heritable and genetically correlated with disease, so a genetic study of those traits can find loci that standard measurements miss. It's designed to work with any model and any data type, from imaging to spirometry.

On the genetics side, I've helped develop fast variance-component methods for gene–gene interactions ([FAME](https://doi.org/10.1038/s41588-025-02411-y), [QuadKAST](https://doi.org/10.1101/gr.279140.124)), gene–environment interactions ([ENGINE](https://doi.org/10.1101/gr.282105.126)), and rare-variant heritability ([FLEX](https://doi.org/10.1101/2025.10.07.681018)). Current projects extend them to rare disease, single-cell data, and genetic correlation across tissues.
