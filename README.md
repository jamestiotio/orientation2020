# SUTD Orientation 2020 Website

This repository houses the frontend codebase to serve the website for SUTD Orientation 2020.

## Technologies Used

- Vue.js
- TypeScript

## Setup

- Project setup: `npm install`
- Compiles and hot-reloads for development: `npm run serve`
- Compiles and minifies for production: `npm run build`
- Run your tests: `npm run test`
- Lints and fixes files: `npm run lint`

### Customize configuration

Change the DNS record of `sutd.edu.sg` to the corresponding Netlify's subdomain:

| DNS Type | From | To | Expire |
| --- | --- | --- | --- |
| CNAME Record | `orientation` | `orientation2020.netlify.com` | 86400 |
| CNAME Record | `www.orientation` | `orientation2020.netlify.com` | 86400 |

See this [Configuration Reference](https://cli.vuejs.org/config/) for more information.

## Credits

- SUTD Orientation 2020 Creative Media Sub-Committee Folks:
  - Azeez Raasheeda Fathima (Head)
  - Arissa Rashid
  - Tan Jean Yee
  - Yeap Hui Yu Sheryl
  - Chloe Ng Kai Xin
  - Cheryl Soh
- [Chester Koh](https://github.com/chesnutcase) for developing the Telegram Bot
- Lee Sea Ming as SUTD Orientation 2020's staff-in-charge
- SUTD's IT department for helping out with the DNS records setup
- The rest of the SUTD Orientation 2020 team
