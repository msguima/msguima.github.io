# Guia de Manutenção — 5 Tarefas Mais Comuns

## 1. Adicionar uma Lista de Exercícios

1. Coloque o PDF na pasta do curso:
   ```
   content/cursos/mecanica-quantica-i/listas/lista03.pdf
   ```

2. Edite o `index.md` do curso e adicione na seção `listas` do cabeçalho YAML:
   ```yaml
   listas:
     - num: 3
       topic: "Momento Angular"
       file: "listas/lista03.pdf"
       deadline: "15/04/2026"
   ```

3. Salve, faça commit e push:
   ```bash
   git add .
   git commit -m "Lista 3 de MQ1"
   git push
   ```

**Tempo:** ~2 minutos. O site atualiza sozinho em ~1 minuto.

---

## 2. Adicionar Notas de Aula

Mesmo processo. Coloque o PDF e edite o YAML:

```yaml
notas:
  - num: 5
    topic: "Oscilador Harmônico"
    file: "notas/aula05.pdf"
```

---

## 3. Publicar um Aviso

Crie um arquivo em `content/avisos/` com o formato:

```markdown
---
title: "Prova de MQ1 adiada para 20/04"
date: 2026-04-10
---

A primeira prova de Mecânica Quântica I foi adiada para 20 de abril.
Estudem os capítulos 1–4 do Griffiths.
```

O aviso aparecerá automaticamente na página inicial.

---

## 4. Atualizar sua Bio ou Informações de Contato

- **Bio:** edite `content/_index.md`
- **Email, telefone, links:** edite `hugo.toml` na seção `[params]`

---

## 5. Adicionar um Novo Curso

1. Crie a pasta:
   ```bash
   mkdir -p content/cursos/novo-curso/notas content/cursos/novo-curso/listas
   ```

2. Crie `content/cursos/novo-curso/index.md`:
   ```yaml
   ---
   title: "Nome do Curso"
   level: "graduacao"    # ou "pos-graduacao"
   semester: "2026/2"
   schedule: "Ter/Qui 10h–12h"
   room: "Sala 3007"
   ---

   ## Ementa
   Descrição do curso...

   ## Bibliografia
   - Livro 1
   - Livro 2
   ```

3. Commit e push. O curso aparecerá automaticamente no índice.

---

## Comandos Git Essenciais

```bash
# Ver mudanças
git status

# Adicionar tudo e publicar
git add .
git commit -m "descrição da mudança"
git push

# Testar localmente antes de publicar
hugo server -D
# Abra http://localhost:1313
```

## Dica

Você pode editar arquivos diretamente no GitHub (github.com → seu repositório → clique no arquivo → ícone de lápis). Isso dispensa usar Git no terminal.
