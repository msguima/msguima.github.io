---
layout: page
title: Projects
permalink: /projects/
description: Selected research projects and current directions
nav: true
nav_order: 5
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

## Open Directions

- Bell-inequality diagnostics for confinement in non-Abelian gauge theories.
- Relative entropy and modular Hamiltonians in interacting quantum field theories.
- Entanglement embezzlement protocols in type III von Neumann algebras.
- Numerical and symbolic tools for quantum-information observables in QFT.

If you are interested in collaboration, student supervision, or postdoctoral opportunities, please email me at `msguimaraes [at] uerj.br`.
