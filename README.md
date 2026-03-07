# Site Acadêmico — Marcelo S. Guimarães

Site Hugo para [msguima.github.io](https://msguima.github.io/).

## Requisitos

- [Hugo](https://gohugo.io/installation/) (versão 0.110+, extended)
- Git

## Começando

```bash
# Clonar o repositório
git clone https://github.com/msguima/msguima.github.io.git
cd msguima.github.io

# Visualizar localmente
hugo server -D

# Abrir no navegador: http://localhost:1313
```

## Deploy no GitHub Pages

O site é publicado automaticamente com GitHub Actions. Basta fazer `git push` e aguardar ~1 minuto.

### Configurar GitHub Actions

Crie `.github/workflows/hugo.yml` no repositório (já incluído neste projeto).

## Estrutura do Projeto

```
content/
├── _index.md              ← Página inicial (bio)
├── pesquisa/_index.md     ← Pesquisa
├── publicacoes/_index.md  ← Publicações
├── cursos/                ← Cursos (um subdiretório por disciplina)
│   ├── _index.md          ← Índice de cursos
│   ├── mecanica-quantica-i/
│   │   ├── index.md       ← Página do curso
│   │   ├── notas/         ← PDFs de notas de aula
│   │   └── listas/        ← PDFs de listas de exercícios
│   └── ...
├── estudantes/_index.md   ← Estudantes e orientação
├── eventos/_index.md      ← Eventos e palestras
├── links/_index.md        ← Links úteis
├── cv/_index.md           ← Curriculum Vitae
└── avisos/                ← Avisos (um arquivo .md por aviso)
    ├── exemplo-aviso-1.md
    └── ...

static/
├── img/photo.svg          ← Sua foto (substitua por .jpg)
└── files/                 ← Arquivos para download (CV PDF, etc.)

themes/academic/           ← Tema customizado
hugo.toml                  ← Configuração do site
```
