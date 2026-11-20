# JiraNotifyer Site (Official Website & Privacy Policy)

Официальный статический сайт и Политика конфиденциальности браузерного расширения **JiraNotifyer**.

- **URL сайта на GitHub Pages:** [https://rusgamehack.github.io/jiranotifyer-site/](https://rusgamehack.github.io/jiranotifyer-site/)
- **Политика конфиденциальности:** [https://rusgamehack.github.io/jiranotifyer-site/privacy/](https://rusgamehack.github.io/jiranotifyer-site/privacy/)

---

## 🛠 Технологический стек

- **Фреймворк:** [Astro](https://astro.build/) (Static Site Generation — SSG)
- **Язык:** TypeScript / Astro components
- **Стилизация:** Чистый CSS с дизайн-системой (CSS Custom Properties)
- **Хостинг и CI/CD:** GitHub Pages + GitHub Actions (`actions/deploy-pages@v4`)

---

## 📋 Требования к окружению

- **Node.js:** `>= 20.0.0` (рекомендуется LTS 20 или 22)
- **npm:** `>= 9.0.0`
- **Git**

---

## 🚀 Установка и локальная разработка

### 1. Клонирование репозитория

```bash
git clone https://github.com/RusGameHack/jiranotifyer-site.git
cd jiranotifyer-site
```

### 2. Установка зависимостей

```bash
npm ci
# или
npm install
```

### 3. Запуск локального dev-сервера

```bash
npm run dev
```

Сервер откроется по адресу `http://localhost:4321/jiranotifyer-site/`.

> Примечание для окружения Antigravity / фонового режима:
> ```bash
> astro dev --background
> ```
> Управление: `astro dev status`, `astro dev logs`, `astro dev stop`.

### 4. Сборка production-версии

```bash
npm run build
```

Сгенерированные статические файлы будут сохранены в каталог `./dist/`.

Для предварительного просмотра собранного сайта:

```bash
npm run preview
```

---

## 📁 Структура проекта

```text
jiranotifyer-site/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow для деплоя на Pages
├── public/
│   ├── favicon.svg           # Фирменная векторная иконка
│   ├── images/               # Каталог для скриншотов и графики
│   └── robots.txt            # Инструкции для поисковых роботов
├── src/
│   ├── components/
│   │   ├── Header.astro      # Шапка сайта с навигацией
│   │   ├── Footer.astro      # Подвал с ссылками и копирайтом
│   │   └── FeatureCard.astro # Карточка преимуществ для лендинга
│   ├── layouts/
│   │   └── BaseLayout.astro  # Базовый HTML-шаблон с мета-тегами
│   ├── pages/
│   │   ├── index.astro       # Главная страница (основа лендинга)
│   │   └── privacy/
│   │       └── index.astro   # Страница Политики конфиденциальности
│   └── styles/
│       └── global.css        # Дизайн-система, переменные и глобальные стили
├── astro.config.mjs          # Конфигурация Astro (site, base, trailingSlash)
├── package.json              # Зависимости и скрипты проекта
├── tsconfig.json             # Настройки TypeScript
├── .gitignore                # Игнорируемые Git файлы
└── README.md                 # Документация репозитория
```

---

## 🌐 Настройка GitHub Pages и маршрутизации

### Параметры в `astro.config.mjs`

```javascript
export default defineConfig({
  site: 'https://rusgamehack.github.io',
  base: '/jiranotifyer-site',
  output: 'static',
  trailingSlash: 'always',
});
```

- `site`: URL учетной записи GitHub Pages (`https://<username>.github.io`).
- `base`: Имя репозитория (`/jiranotifyer-site`), необходимое для правильной загрузки скриптов, стилей и маршрутов в подпапке.
- `trailingSlash: 'always'`: Гарантирует корректное открытие статических директорий (например, `/privacy/`) без 404 на GitHub Pages.

### Переход на собственный домен (Custom Domain)

Если в будущем сайт будет переведен на собственный домен (например, `https://jiranotifyer.com`):
1. В `astro.config.mjs` изменить:
   ```javascript
   site: 'https://jiranotifyer.com',
   base: '/',
   ```
2. В репозитории GitHub: **Settings → Pages → Custom domain** указать ваш домен.
3. Добавить файл `public/CNAME` с именем домена.

---

## 🔗 Интеграция ссылок

### 1. Ссылка на Chrome Web Store
В компонентах [Header.astro](src/components/Header.astro) и [index.astro](src/pages/index.astro) заменить заглушку `https://chromewebstore.google.com` на прямую ссылку на опубликованное расширение в Chrome Web Store после его модерации:
```html
https://chromewebstore.google.com/detail/jiranotifyer/<EXTENSION_ID>
```

### 2. Ссылки на Telegram / поддержку
Для добавления контактов сообщества или Telegram-канала добавьте ссылки в [Footer.astro](src/components/Footer.astro) и в секцию контактов на странице конфиденциальности.

---

## 🚀 Режим первой публикации (Deployment)

В текущем состоянии репозиторий имеет статус **INFRASTRUCTURE READY**. В workflow `.github/workflows/deploy.yml` настроен триггер:

- `workflow_dispatch` — ручной запуск.

### Как опубликовать сайт:

1. **Вручную через веб-интерфейс GitHub:**
   - Открыть вкладку **Actions** в репозитории: `https://github.com/RusGameHack/jiranotifyer-site/actions`.
   - Выбрать workflow **Deploy to GitHub Pages**.
   - Нажать кнопку **Run workflow** (ветка `main`).

2. **Включение автоматического деплоя при каждом коммите:**
   - После завершения разработки полноценного лендинга раскомментировать в [.github/workflows/deploy.yml](.github/workflows/deploy.yml) блок:
     ```yaml
     push:
       branches: [ main ]
     ```
   - Закоммитить и запушить изменения — каждый последующий пуш в `main` будет автоматически собирать и публиковать сайт.
