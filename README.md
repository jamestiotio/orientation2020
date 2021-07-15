# SUTD Orientation 2020 Website

This repository houses the frontend codebase to serve the website for SUTD Orientation 2020.

[![Netlify Status](https://api.netlify.com/api/v1/badges/1099296b-a6b5-4bb4-b678-0e6f991c2fa9/deploy-status)](https://app.netlify.com/sites/orientation2020/deploys)

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
| CNAME Record | `orientation` | `orientation2020.netlify.app` | 86400 |
| CNAME Record | `www.orientation` | `orientation2020.netlify.app` | 86400 |

See this [Configuration Reference](https://cli.vuejs.org/config/) for more information.

On Netlify, set these settings:

- Build command: `npm run build`
- Publish directory: `dist`
- Deploy log visibility: `Private logs`
- Production branch: `master`
- Deploy previews: `Automatically build deploy previews for all pull requests`
- Branch deploys: `Deploy only the production branch`
- Build image: `Ubuntu Xenial 16.04 (default)`
- Asset optimization: `Pretty URLs`, `Bundle CSS`, `Minify CSS`, `Bundle JS`, `Minify JS` and `Compress Images`
- Custom domain: `orientation2020.netlify.app` and `orientation.sutd.edu.sg`

## Credits

- SUTD Orientation 2020 Creative Media Sub-Committee Folks:
  - [Azeez Raasheeda Fathima](https://github.com/RaasheedaFathima) (Head)
  - [Arissa Rashid](https://github.com/radjsh)
  - Tan Jean Yee
  - Yeap Hui Yu Sheryl
  - Chloe Ng Kai Xin
  - Cheryl Soh
- [Chester Koh](https://github.com/chesnutcase) for developing the Telegram Bot
- Lee Sea Ming as SUTD Orientation 2020's staff-in-charge
- SUTD's IT department for helping out with the DNS records setup
- The rest of the SUTD Orientation 2020 team
