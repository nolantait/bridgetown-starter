---
# Feel free to add content and custom Front Matter to this file.

layout: default
---

# Hello world

<ul class="block-flow block-flow-sm my-sm list-disc pl-xs">
  <% collections.posts.resources.reverse.each do |post| %>
    <li>
      <a class="link" href="<%= post.relative_url %>"><%= post.data.title %></a>
      <% post.data.categories.each do |category| %>
        <span class="badge"><%= category %></span>
      <% end %>
    </li>
  <% end %>
</ul>
