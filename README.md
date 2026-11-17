
\# AkiliTech Academy

A responsive, static website for a personal computer science tutor in Dar es Salaam. Built with semantic HTML, CSS and plain JavaScript; no package installation or build step is required.

## Run locally

Open `index.html` in a browser, or serve the folder with any static web server. For example, with Python installed:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customize before publishing

- Replace the sample brand name, contact email, phone number and tutor introduction in `index.html`.
- Update `WHATSAPP_NUMBER` in `script.js` to the tutor's international number, digits only (for example, `2557XXXXXXXX`). The call link and structured contact details in `index.html` should be updated to match.
- Replace the sample photos with tutor-approved images. The current African youth learning photos are credited links to the World Bank, Kenya Kids Can and Macedonia Schools; confirm reuse permission or replace them with licensed images before publishing. Edit the image URLs and alt text in `index.html`.
- Review all proposed course durations, age ranges, prices, areas served and holiday availability in `index.html`. Package prices are suggestions and should be confirmed before publication.
- Replace the canonical domain in `robots.txt` and `sitemap.xml` once the final domain is known.
- Add genuine testimonials only with permission. Tutor qualifications and experience are intentionally not asserted in this starter content.

## Enrollment and privacy

The form validates required fields in the browser and opens WhatsApp with the submitted details pre-filled. The visitor reviews and sends the message in WhatsApp. No form data is sent to or stored by this static site. To use a hosted form service instead, configure its endpoint and privacy terms before connecting it.

## Deployment

Upload the contents of this directory to any static hosting provider or web server. Configure HTTPS, point the domain to the host, and update the sitemap/robots domain. The site uses Google Fonts and externally hosted photos; locally host approved assets if third-party requests are not desired.

## Editing content

Courses, package ideas, FAQs, contact information and tutor copy are in `index.html`. Layout and responsive styles are in `styles.css`. Mobile navigation, course preselection and WhatsApp form behavior are in `script.js`.
# AkiliTechAcademy
