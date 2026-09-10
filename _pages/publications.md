---
layout: page
permalink: /publications/
title: Publications
description: publications by categories in reversed chronological order.
nav: true
nav_order: 3
selected_papers: true
_styles: >
  .selected-papers > .publications {
    margin-top: 0;
  }
---

<!-- _pages/publications.md -->

<!-- Google Scholar link + legend (left) and bibsearch filter (right), on one line -->
<div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; column-gap: 1rem; row-gap: 4px; margin-top: -1.5rem; margin-bottom: 8px;">
    <div style="flex: 1 1 240px; min-width: 0; font-size: 1.1rem;">
      <a href="https://scholar.google.com/citations?user=o3_eO6EAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
        <i class="ai ai-google-scholar"></i> Google Scholar profile
      </a>
      <div style="margin-top: 2px; font-size: 0.9rem; color: var(--global-text-color-light);">
        <span style="text-decoration: underline;">Underlined</span> denotes members of our group
      </div>
    </div>
    <div style="flex: 0 1 40%; min-width: 200px;">
      {% include bib_search.liquid %}
    </div>
</div>

{% if page.selected_papers %}

<div class="publications selected-papers">
    <h2 class="bibliography">
      <a href="{{ '/publications/' | relative_url }}" style="color: inherit">Selected Publications</a>
    </h2>
    {% include selected_papers.liquid %}
</div>
{% endif %}

<div class="publications">

{% bibliography %}

</div>
