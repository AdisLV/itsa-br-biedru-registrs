# TECH NOTES – Tehniskā dokumentācija

## 1. Projekta tehniskā struktūra
/itsabr-members
├── index.html
├── style.css
├── script.js
├── PPS.md
├── USER_GUIDE.md
└── TECH_NOTES.md


## 2. Izmantotās tehnoloģijas

| Daļa | Tehnoloģija |
|------|-------------|
| Frontend | HTML, CSS, JavaScript |
| Backend / API | Supabase (PostgreSQL + REST API) |
| Hosting | GitHub Pages |
| Versiju kontrole | GitHub |


## 3. Supabase tabulas struktūra

| Lauks | Tips | Apraksts |
|-------|------|----------|
| id | int8 (bigint) | Unikāls identifikators, Primary Key, Auto increment |
| name | text | Biedra vārds un uzvārds |
| status | text | Biedra statuss (Aktīvs, Neaktīvs, Cits) |

