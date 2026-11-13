# Tara Devi’s Group website

A responsive, blue-and-white website for Tara Devi’s Group, built from the supplied reference HTML, revised company content, and logo reference.

The homepage includes a scenic Himalayan valley hero, company story and vision, a “Who we are” promoter introduction, Shimla and Kufri developments, leadership profiles, careers, and an enquiry form that prepares a WhatsApp message for **+91 98711 77761**. Visitors review and send the message themselves. No enquiry data is stored by this website.

## Publish with GitHub Pages

The site is ready for GitHub Pages without a build step or package installation:

1. Open this repository’s **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose **main** and **/ (root)**, then **Save**.
4. Once GitHub’s deployment finishes, open **https://taradevisenclave.github.io/taradevis-website/**.

This address becomes live only after GitHub Pages is enabled and deployment succeeds. The repository can also be served by any static website host.

## Preview locally

Open `index.html` directly, or run `python3 -m http.server 8000` from this directory and visit `http://localhost:8000`.

## Edit the website

- `index.html`: website content, team profiles, contact number and careers email.
- `styles.css`: branding, layouts and responsive styles. Brand colors are defined at the top in `:root`.
- `script.js`: mobile navigation, project selection, enquiry validation, WhatsApp preparation and privacy dialog.
- `assets/`: local images, emblem, fonts and font licenses.

Keep the enquiry number consistent in `index.html` and `script.js` when changing it. Careers enquiries open the visitor’s email app addressed to `careers@taradevis.com`. Team profiles use designed initials because team portraits were not supplied.

## Content and imagery

The revised Word document supplies the story, vision, leadership and careers content. The reference HTML supplies the project names, contact number, company legal name and RERA identifier. The revised content takes precedence where it differs. The team member name **Digviay Jamwal** follows the supplied document’s spelling.

The hero is a generated Himalayan landscape illustration, not a photograph of a development. The supplied logo reference was prepared as a transparent web emblem. The project cards use the original photographs supplied by the website owner in `Sunset Hilltop Resort Panorama.zip`, resized and encoded as WebP for faster loading:

- **Tara Devi Enclave:** `IMG_9936.png` — bedroom with a balcony and forest view. The portrait photograph is displayed with a lower focal point to keep the room and view in the card.
- **Downtown Kufri:** `Sunset Hilltop Resort Panorama.png` — a panoramic location view at sunset.

The supplied photographs replace the initial illustrative stock images. The Kufri photograph is labelled as a location view.


The “Who we are” section sits immediately before “03 / Our Vision” and retains the existing Cormorant/Manrope typography and blue-and-white theme. Its company and promoter details come from the original supplied HTML reference. Its mountain photograph uses the same [Unsplash source image](https://images.unsplash.com/photo-1464822759023-fed622ff2c3b) as that reference, served locally as `assets/who-we-are-mountains.webp`.

- Cormorant Garamond and Manrope: self-hosted font subsets from Google Fonts under the SIL Open Font License. The license notices are included in `assets/`.

Project status, availability, specifications and approvals should be confirmed directly with the business before any factual updates. No prices, testimonials, invented team portraits or unprovided amenities have been added.

## Accessibility and privacy

Includes keyboard navigation, a skip link, semantic landmarks, labelled form controls, visible focus styles, reduced-motion support and a native privacy dialog. All fonts and images are served locally. There are no trackers, cookies or analytics scripts. WhatsApp and email links open external services only when a visitor chooses to use them.

## Verification

JavaScript syntax, local file references, section anchors, asset integrity, and enquiry interactions are checked during preparation. Browser rendering and device testing should also be performed before a final public launch.


