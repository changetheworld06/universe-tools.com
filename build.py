from pathlib import Path

# 1. Charger le template
template = Path("base.html").read_text(encoding="utf-8")

# 2. Définir les pages à générer
pages = [
    {
        "filename": "test.html",
        "title": "Test – Universe Tools",
        "description": "Test page for Universe Tools layout.",
        "content": """
<div class="container">
  <h1>Hello Universe Tools</h1>
  <p>Page de test générée automatiquement.</p>

  <section class="tool-section">
    <p>Bloc de test stylé avec les nouveaux CSS.</p>
  </section>
</div>
"""
    },
    # Tu ajouteras ici index.html, les pages outils, etc.
]

# 3. Générer les fichiers
for page in pages:
    html = (
        template
        .replace("{{TITLE}}", page["title"])
        .replace("{{DESCRIPTION}}", page["description"])
        .replace("{{CONTENT}}", page["content"])
    )
    Path(page["filename"]).write_text(html, encoding="utf-8")
    print(f"Generated {page['filename']}")