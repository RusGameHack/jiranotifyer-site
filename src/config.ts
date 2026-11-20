// Central configuration for JiraNotifyer website

export const CONFIG = {
  // Website base URL
  SITE_URL: 'https://rusgamehack.github.io/jiranotifyer-site/',

  // Chrome Web Store listing URL. Empty or null indicates pending publication.
  CHROME_WEB_STORE_URL: '',

  // Official Telegram channel/support link. Empty or null indicates pending channel.
  TELEGRAM_URL: '',

  // Public GitHub repository for the website
  GITHUB_URL: 'https://github.com/RusGameHack/jiranotifyer-site',

  // Product metadata
  PRODUCT_NAME: 'JiraNotifyer',
  PRODUCT_DESCRIPTION: 'Браузерное расширение для звуковых и визуальных уведомлений о задачах в Jira.',
};

export const isChromeWebStorePublished = Boolean(CONFIG.CHROME_WEB_STORE_URL);
export const isTelegramConfigured = Boolean(CONFIG.TELEGRAM_URL);
