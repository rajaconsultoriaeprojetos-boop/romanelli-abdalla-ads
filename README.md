# Romanelli Abdalla — Landing Ads (Desbloqueio Bancário)

Landing de tráfego pago para **Romanelli Abdalla Advocacia**.

| | |
|---|---|
| Subdomínio (ads) | https://ads.romanelliabdalla.com.br |
| Site principal | https://romanelliabdalla.com.br |
| Produção Vercel | https://romanelli-abdalla-ads.vercel.app |
| GitHub | https://github.com/rajaconsultoriaeprojetos-boop/romanelli-abdalla-ads |
| Site institucional (repo) | https://github.com/rajaconsultoriaeprojetos-boop/romanelli-legal-flow |

## Páginas

- `/` — triagem inicial (etapa 1)
- `/desbloqueio-bancario.html` — conversão / WhatsApp (etapa 2)

## Mensuração

- GTM: `GTM-TPJQCKZW`
- Conversão Google Ads via GTM no evento `whatsapp_conversion` (sem snippet AW direto no HTML)

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abre em `http://127.0.0.1:43127`.

## Deploy

Projeto Vercel: `romanelli-abdalla-ads` (time RAJA), conectado a este repositório GitHub.

```bash
npm run build
npx vercel --prod
```

## DNS do subdomínio `ads`

No provedor do domínio `romanelliabdalla.com.br` (Registro.br), aponte o subdomínio **ads** para a Vercel:

**Opção recomendada (CNAME):**

| Tipo | Nome | Valor |
|------|------|--------|
| CNAME | `ads` | `fd4e440b93dfc390.vercel-dns-017.com` |

**Alternativa (A):**

| Tipo | Nome | Valor |
|------|------|--------|
| A | `ads` | `76.76.21.21` |

Hoje o `ads` ainda aponta para `base44.onrender.com`. Depois de alterar o DNS, confira com:

```bash
npx vercel domains verify ads.romanelliabdalla.com.br
```
