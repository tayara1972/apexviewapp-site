# ApexView One-Page Website (Static)

This is a simple static landing page designed for fast loading and high conversion.

## What you need to do (Mailchimp)
1) In Mailchimp, create an Audience
2) Create a Signup form
3) Copy the "Embedded form" HTML
4) Open `index.html`
5) Find the section `<!-- MAILCHIMP: ... -->`
6) Replace the `<div class="mailchimp-embed"> ... </div>` block with your embed code

## Deploy for free on Cloudflare Pages (recommended)
You already use Cloudflare for the domain, so this is the cleanest path.

### A) Create a GitHub repo
1) Create a new repo on GitHub (example: `apexviewapp-site`)
2) Upload these files:
   - index.html
   - styles.css
   - script.js
   - assets/ (folder)

### B) Create Cloudflare Pages project
1) Cloudflare Dashboard -> Pages -> Create a project
2) Connect to GitHub -> pick your repo
3) Framework preset: "None"
4) Build command: (leave empty)
5) Output directory: (leave empty)

Cloudflare will deploy the site and give you a `*.pages.dev` URL.

### C) Connect your custom domain
1) In the Pages project -> Custom domains -> Add custom domain
2) Enter `apexviewapp.com` (and optionally `www.apexviewapp.com`)
3) Cloudflare will auto-create the needed DNS records in most cases

## Swap CTA when you have TestFlight / App Store
In `index.html`, search for:
- "Download (soon)"
- "Get notified for launch"

Replace those with your real App Store link later.
