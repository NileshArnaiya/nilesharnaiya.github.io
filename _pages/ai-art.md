---
layout: page
title: AI Art
permalink: /ai-art/
description: A growing collection of Diffusion Generated Pictures.
website: instagram.com
nav: true
nav_order: 5
display_categories: [work, fun]
horizontal: false
---

<style>

.image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Adjust column width as needed */
    grid-gap: 10px; /* Adjust gap between images as needed */
}

.image-gallery img {
    width: 100%;
    height: auto;
}

  </style>
<!-- pages/projects.md -->


<div style="padding:20px">
    <a href="https://www.instagram.com/notsohuman.ai" target="_blank">FollLow us on Instagram</a>
</div>

  <div class="grid">

  <!-- Inside your Jekyll template file, such as a page or post -->
<div class="image-gallery">
    {% for image in site.static_files %}
        {% if image.path contains '/photos/' %}
            <img src="{{ site.baseurl }}{{ image.path }}" alt="Image">
        {% endif %}
    {% endfor %}
</div>

  </div>
</div>
