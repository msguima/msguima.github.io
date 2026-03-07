---
layout: page
title: Projects
permalink: /projects/
description: Selected research projects and current directions
nav: true
nav_order: 5
display_categories: [quantum information, confinement, numerical methods]
horizontal: false
---

This page gathers selected projects from my research program in non-perturbative quantum field theory and quantum information.

<div class="projects">
{% assign sorted_projects = site.projects | sort: "importance" | reverse %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      {% for project in sorted_projects %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  </div>
</div>

## Ongoing Priorities (2026)

- Bell-inequality diagnostics for confinement in non-Abelian gauge theories.
- Relative entropy and modular Hamiltonian methods in interacting QFT.
- Entanglement-embezzlement protocols in type-III von Neumann algebras.
- Symbolic and numerical tools for QFT quantum-information observables.

If you are interested in collaboration, supervision (M.Sc./Ph.D.), or postdoctoral opportunities, please contact me at `msguimaraes [at] uerj.br`.
