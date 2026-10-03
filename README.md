# Romanelli Abdalla — Landing Ads (Desbloqueio Bancário)

Landing page de tráfego pago para **Romanelli Abdalla Advocacia**, usada no subdomínio:

**https://ads.romanelliabdalla.com.br**

Domínio principal do site institucional: **https://romanelliabdalla.com.br**

## Páginas

- `/` — triagem inicial (etapa 1)
- `/desbloqueio-bancario.html` — página de conversão / WhatsApp (etapa 2)

## Mensuração

- GTM: `GTM-TPJQCKZW`
- Conversão Google Ads via GTM no evento `whatsapp_conversion` (sem disparo direto do snippet AW no HTML)

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abre em `http://127.0.0.1:43127`.

## Build / Vercel

```bash
npm run build
```

Deploy na Vercel com o domínio customizado `ads.romanelliabdalla.com.br` apontando para este projeto.
