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
    <br>
    <span>Some silly chrome extensions below
    <br>
       <a href="https://chromewebstore.google.com/detail/motivational-video-extens/cpdlfeohbkmpfdffmjfelicfkhbmbcdg" target="_blank">Motivational Video Extension</a>
    <br>
    </span>
    <span>
       <a href="https://chromewebstore.google.com/detail/dipaddllajdekkjnbilinclnfeaeebki" target="_blank">Bookmark sharing</a>
    <br>

  </span>
    <br>
    All my apps in my dev account were taken down by Google, since 3 of the apps were flagged for harmful content, where in reality they did not want anyone using the old Youtube API, no explanations were given. 

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
