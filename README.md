# CENIT @UofT Web Site

The Centre of Excellence for Networking Innovation in Toronto (CENIT) was established in 2023 with support from the Canada Excellence Research Chair in Intelligent Digital Infrastructures at the University of Toronto. CENIT focuses on reimagining how the Internet could operate using more processing power, storage capacity, and machine intelligence inside networks; and developing  just and equitable intelligent digital infrastructures that can serve all segments of society. 


## Local Development

First, run `pnpm i` or `yarn install` or `npm install` to install the dependencies.

Then, run `pnpm dev` or `yarn run dev` to start the development server and visit `http://localhost:3000`.

## User guide 

### Add new publications

To add new publications using [Google Scholar](https://scholar.google.com/) and find their BibTeX entries, follow these steps:

1. Search for the publication on Google Scholar.
2. Locate the citation for the publication.
3. Click on the "Cite" button below the citation.
4. Select "BibTeX" as the citation format.
5. Copy the BibTeX entry provided.
6. Open the BibTeX file located at `/public/publications/BibTeX.bib`.
7. Add a new row at the appropriate location in the file, maintaining the order.
8. Paste the copied BibTeX entry into the new row.
9. Save the changes to the BibTeX file.

**Ensure that the new row is added in the correct order based on the existing entries in the file.**

## TODO

- [x] Edit Sitemap address
- [x] Complete theme.config
- [x] Add SEO tags
- [ ] Mobile friendly icons
- [ ] Dark mode support

## License & Permissions

The software framework and underlying code of this website project are licensed under the MIT License (see the accompanying LICENSE file). However, the following items are **strictly excluded** from the MIT License. You do not have permission to copy, modify, redistribute, or reuse them. Explicit prior written permission must be obtained for:

* **Personal Identity & Images**: All profile photos, gallery portraits and images, CENIT logos, and personal media assets.
* **Academic & Written Content**: All publication details, paper abstracts, patent text, research project descriptions, and custom CV copy. (Note that some of these contents might be licensed by third-party publishers where permission must be obtained from the corresponding publishers directly.)
* **Biographical Text**: All personal statements, about-me write-ups, and custom text narratives.

Any unauthorized use of these specific assets is strictly prohibited. 

## Credit

Special thanks to the Hive Lab for their work on this beautiful website template.
Credit: https://www.hivelab-uoft.ca/

## Tools

Developed using open-source tools:

- [X] https://nextra.site/
- [X] https://floatui.com/components/modals




