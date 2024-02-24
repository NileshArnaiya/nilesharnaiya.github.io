---
layout: page
permalink: /projects/
title: Projects 
nav: true
nav_order: 4
---

<div style="padding:20px">
Don't miss out on my first ever Internship Project -
    <a href="https://gnani-editor.firebaseapp.com/" target="_blank">Gnani Editor</a>
    <br>
    I have tons which are Private, which might not show below. 
</div>

<div>
 
</div>
## GitHub users

{% if site.data.repositories.github_users %}c
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.html username=user %}
  {% endfor %}
</div>
{% endif %}

## GitHub Repositories

{% if site.data.repositories.github_repos %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %}
