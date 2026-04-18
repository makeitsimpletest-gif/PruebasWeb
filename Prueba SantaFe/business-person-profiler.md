---
name: business-person-profiler
description: >
  Use this skill whenever a business person, executive, entrepreneur, or industry leader is mentioned by name — especially when the context suggests the user may be preparing for a meeting, sales call, negotiation, networking event, or business conversation with that person. Trigger even if the user doesn't explicitly say "look up this person" or "research this person." If someone says "I have a meeting with [Name]", "I'll be talking to [Name]", "I'm meeting with the CEO of [Company]", "tell me about [Name]", or simply mentions a business name in a professional context, use this skill immediately. The skill performs a web search to build a concise professional profile and generate tailored technology conversation topics.
---

# Business Person Profiler

Builds a quick intelligence brief on a business person: their career trajectory, current and past roles, industries, and likely technology interests — then suggests relevant tech conversation starters.

---

## When This Skill Triggers

- User mentions a person's name in a business/professional context
- User says they have a meeting, call, pitch, or conversation with someone
- User asks "tell me about [Name]" or "who is [Name]" in a business context
- User wants to prepare for a conversation with an executive or entrepreneur

---

## Workflow

### Step 1 — Identify the person

Extract the full name (and company/title if mentioned). If ambiguous (e.g., "John Smith"), ask for the company or role to disambiguate before searching.

### Step 2 — Search for information

Run **3–4 targeted web searches** to gather:

1. `[Full Name] [Company] executive background`
2. `[Full Name] career history LinkedIn OR biography`
3. `[Full Name] technology interests OR digital transformation OR innovation`
4. `[Full Name] recent news OR interview OR conference 2024 2025`

Use `web_fetch` on the most relevant result pages (LinkedIn, company bios, Forbes/Bloomberg profiles, conference speaker pages) to get fuller detail.

### Step 3 — Build the profile

Synthesize findings into this structured output:

---

**🧑‍💼 Perfil Profesional: [Full Name]**

**Cargo actual:** [Title] en [Company]

**Trayectoria clave:**
- [Company/Role — years]: One sentence on what they did/achieved
- [Company/Role — years]: One sentence on what they did/achieved
- *(2–4 entries covering the arc of their career)*

**Industrias:** [List industries they've worked in]

**Señales tecnológicas:** 
- What technologies, platforms, or digital initiatives have been in their orbit?
- Any public statements, investments, or initiatives related to tech?
- What pain points or transformations is their current industry facing?

---

**💬 Temas de conversación en tecnología**

Suggest **3–5 specific, relevant conversation starters** tailored to this person. Each should:
- Connect to something in their actual background or current role
- Be framed as a genuine question or insight, not a sales pitch
- Touch on technology angles relevant to their world

Format each as:
> **Tema:** [Short label]  
> **Por qué es relevante:** [1 sentence connecting it to their background]  
> **Pregunta o ángulo sugerido:** [A natural conversation opener]

---

### Step 4 — Handle information gaps

If little public information is found:
- Say so transparently: *"Encontré información limitada sobre esta persona..."*
- Shift to industry-level profiling: research their company and sector instead
- Still generate technology conversation topics based on their industry/role

---

## Tone and Language

- Default to **Spanish** unless the user writes in English
- Concise and actionable — this is a pre-meeting brief, not a biography
- Professional but conversational tone
- Avoid speculative claims; stick to what's supported by search results
- Never invent quotes or facts — if uncertain, flag it

---

## Output Length

Target **300–500 words** total. The user needs to read this quickly before a meeting, not study it.

---

## Example Output Structure

```
🧑‍💼 Perfil Profesional: Ana García

Cargo actual: Chief Digital Officer en Grupo Bimbo

Trayectoria clave:
- Grupo Bimbo (2021–presente): Lidera la transformación digital de la operación regional, incluyendo automatización de planta y ecommerce B2B.
- McKinsey & Co. (2015–2021): Socia en la práctica de operaciones y tecnología para CPG en América Latina.
- Procter & Gamble (2010–2015): Gerente de supply chain con foco en sistemas ERP y analítica.

Industrias: Consumo masivo, consultoría estratégica, manufactura

Señales tecnológicas:
- Ha mencionado públicamente interés en IA aplicada a demand forecasting
- Su empresa está piloteando rutas de distribución optimizadas con ML
- Sector enfrenta presión de retailers exigiendo integración EDI/API

💬 Temas de conversación en tecnología

Tema: IA en cadena de suministro
Por qué es relevante: Viene de supply chain y ahora lidera digital — este es su mundo
Pregunta sugerida: "¿Cómo están manejando el balance entre modelos predictivos centralizados vs. decisiones locales en planta?"

Tema: Ecommerce B2B en CPG
Por qué es relevante: Su empresa está acelerando en canal digital directo a tiendas
Pregunta sugerida: "¿Están construyendo su propia plataforma o integrando con marketplaces como Mercado Libre?"
```
