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

<!-- Bibsearch Feature -->
<div style="float: right; margin-bottom: 20px;">
    {% include bib_search.liquid %}
</div>

<div style="clear: both;"></div>

<div class="post">
  <article>
    {% if page.selected_papers %}
        <h2 style="margin-bottom: 0px; padding-bottom: 0px;">
            <a href="{{ '/publications/' | relative_url }}" style="color: inherit">Selected Publications</a>
        </h2>
        
        <div style="margin-top: 2px;">
            {% include selected_papers.liquid %}
        </div>
    {% endif %}
  </article>
</div>

<div class="publications">

{% bibliography %}

</div>
