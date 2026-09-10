---
layout: page
permalink: /publications/
title: Publications
description: publications by categories in reversed chronological order.
nav: true
nav_order: 3
selected_papers: true
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature + Google Scholar link (right column) -->
<div style="float: right; margin-top: -1.5rem; margin-bottom: 4px; width: 40%;">
    {% include bib_search.liquid %}
    <div style="margin-top: 4px; text-align: right;">
      <a href="https://scholar.google.com/citations?user=o3_eO6EAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
        <i class="ai ai-google-scholar"></i> Google Scholar profile
      </a>
    </div>
    <div style="margin-top: 2px; text-align: right; font-size: 0.8rem; color: var(--global-text-color-light);">
      <span style="text-decoration: underline;">Underlined</span> denotes members of our group
    </div>
</div>

<div style="clear: both; margin: 0; padding: 0;"></div>

{% if page.selected_papers %}

<h2 style="margin-top: 0; margin-bottom: 0; padding-bottom: 0;">
    <a href="{{ '/publications/' | relative_url }}" style="color: inherit">Selected Publications</a>
</h2>

<div style="margin-top: 2px;">
    {% include selected_papers.liquid %}
</div>
{% endif %}

<div class="publications">

{% bibliography %}

</div>
