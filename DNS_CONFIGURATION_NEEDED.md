# DNS — romanelliabdalla.com.br (Registro.br → Vercel)

Status: aguardando **novo código de 8 dígitos** do Registro.br (e-mail `laisromanelli.a@...`). Códigos anteriores expiram após o uso.

Manter nameservers do Registro.br: `d.sec.dns.br`, `e.sec.dns.br`.

## Remover (Base44 / Render)

- CNAME `www` → `base44.onrender.com`
- CNAME `ads` → `base44.onrender.com`
- A `@` → `216.24.57.x` (Render)

## Inserir / alterar (Vercel)

| Tipo | Nome | Valor | Projeto Vercel |
|------|------|--------|----------------|
| A | `@` | `216.198.79.1` | romanelli-legal-flow |
| A | `@` | `64.29.17.1` | romanelli-legal-flow |
| CNAME | `www` | `e3674bb196f8b5fd.vercel-dns-017.com` | romanelli-legal-flow |
| CNAME | `ads` | `fd4e440b93dfc390.vercel-dns-017.com` | romanelli-abdalla-ads |

Alternativa aceita pela Vercel para `@`: A → `76.76.21.21` (preferir o par de IPs acima).

## Registro.br

Painel → domínio **romanelliabdalla.com.br** → **Configurar zona DNS** → **Modo avançado**.

## Verificação (após propagar)

```bash
npx vercel domains verify romanelliabdalla.com.br
npx vercel domains verify www.romanelliabdalla.com.br
npx vercel domains verify ads.romanelliabdalla.com.br
```
