# Tara Devi’s Group website

A responsive, blue-and-white website for Tara Devi’s Group, built from the supplied reference HTML, revised company content, and logo reference.

The homepage includes a scenic Himalayan valley hero, our philosophy and vision, a “Who we are” promoter introduction, Shimla and Kufri developments, leadership profiles, careers, and an embedded HubSpot enquiry form that sends submissions to Tara Devi’s Group. Telephone and WhatsApp contact links remain available at **+91 98711 77761**.

The hero headline reads **“Legacy living, peaks apart.”** The header’s **Our philosophy** link leads to the opening philosophy section, followed by **A Different Point of View** (forest image) and **The Taradevi’s Way** (four principles), before **02 / Our Residences**. These sections use the original supplied HTML reference’s copy, adapted to the current blue-and-white theme. The header’s **Get in touch** button links directly to `#enquiry-form` and selects a general enquiry. The hero retains the **Explore our residences** CTA.

## Publish with GitHub Pages

The site is ready for GitHub Pages without a build step or package installation:

1. Open this repository’s **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose **main** and **/ (root)**, then **Save**.
4. Once GitHub’s deployment finishes, open **https://taradevisgroup.github.io/taradevis-website/**.

This address becomes live only after GitHub Pages is enabled and deployment succeeds. The repository can also be served by any static website host.

## Preview locally

Open `index.html` directly, or run `python3 -m http.server 8000` from this directory and visit `http://localhost:8000`.

## Edit the website

- `index.html`: website content, team profiles, contact number and careers email.
- `styles.css`: branding, layouts and responsive styles. Brand colors are defined at the top in `:root`.
- `script.js`: mobile navigation, HubSpot project preselection and enquiry metadata, and the privacy dialog.
- `assets/`: local images, emblem, fonts and font licenses.

Phone and WhatsApp links are configured in `index.html`. HubSpot embed IDs are in the HTML, with the form ID and verified interest-field mapping in `script.js`. Careers enquiries open the visitor’s email app addressed to `careers@taradevis.com`. Team profiles use designed initials because team portraits were not supplied.


## HubSpot enquiry form

- Region: `na2`
- Portal ID: `248005545`
- Form ID: `246d4822-f5ae-4e5f-86f1-abfcca5d1de2`
- Official loader: `https://js-na2.hsforms.net/forms/embed/248005545.js`
- Placement: the existing `#enquiry-form` panel in the contact section.

HubSpot manages the form’s fields, validation, styling, submission destination, consent notices and success behavior. No server-side API key is needed for this public embed.

The website uses HubSpot’s documented `hs-form-event:on-ready` event and `HubSpotFormsV4` API to preserve project selection from the website’s CTA buttons. The verified HubSpot field reference is `0-1/im_interested_in`, with values `Tara Devis Enclave`, `Downtown Kufri` and `General enquiry`. The website label **Tara Devi Enclave** maps to HubSpot’s **Tara Devis Enclave** option. HubSpot also receives the originating website project and enquiry intent as extra submission metadata. Visitors can still change their interest inside the HubSpot form.

If the HubSpot form or property options are changed, update the field mapping in `script.js` as needed. Do not add the old WhatsApp form submit handler back; HubSpot owns submission.

## Content and imagery

The revised Word document supplies the story, vision, leadership and careers content. The reference HTML supplies the project names, contact number, company legal name and RERA identifier. The revised content takes precedence where it differs. The team member name **Digviay Jamwal** follows the supplied document’s spelling.

The hero is a generated Himalayan landscape illustration, not a photograph of a development. The supplied logo reference was prepared as a transparent web emblem. The project cards use the original photographs supplied by the website owner, resized and encoded as WebP for faster loading:

- **Tara Devi Enclave:** `IMG_9936.png` — bedroom with a balcony and forest view. The portrait photograph is displayed with a lower focal point to keep the room and view in the card.
- **Downtown Kufri:** `Sunlit Terraced Mountain Valley.png`, supplied in `Sunlit Terraced Mountain Valley.zip` — a sunlit terraced mountain valley with forested slopes and distant peaks. This replaces the earlier sunset panorama.

The supplied photographs replace the initial illustrative stock images. The Kufri photograph is labelled as a scenic view.


The “Who we are” section sits immediately before “03 / Our Vision” and retains the existing Cormorant/Manrope typography and blue-and-white theme. Its company and promoter details come from the original supplied HTML reference. Its mountain photograph uses the same [Unsplash source image](https://images.unsplash.com/photo-1464822759023-fed622ff2c3b) as that reference, served locally as `assets/who-we-are-mountains.webp`.

The forest photograph in “A Different Point of View” comes from the original reference’s [Unsplash image](https://images.unsplash.com/photo-1448375240586-882707db888b) and is served locally as `assets/philosophy-forest.webp`.

- Cormorant Garamond and Manrope: self-hosted font subsets from Google Fonts under the SIL Open Font License. The license notices are included in `assets/`.

Project status, availability, specifications and approvals should be confirmed directly with the business before any factual updates. No prices, testimonials, invented team portraits or unprovided amenities have been added.

## Accessibility and privacy

Includes keyboard navigation, a skip link, semantic landmarks, labelled form controls, visible focus styles, reduced-motion support and a native privacy dialog. The website’s own fonts and images are served locally. The enquiry form is hosted by HubSpot and uses HubSpot’s scripts, form settings and privacy policy. WhatsApp and email links are optional contact alternatives.

## Verification

The integration is checked for JavaScript errors, form rendering, project preselection, privacy navigation and mobile layout without creating a test submission. Actual lead receipt can be checked by the website owner in HubSpot.





