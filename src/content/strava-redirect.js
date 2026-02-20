// Shared redirect logic for Strava onboarding and dashboard pages
(async function () {
  const { redirect } = await browser.storage.local.get('redirect');
  const isValidRedirect = redirect && redirect.startsWith('/');
  const samePath = redirect === window.location.pathname;
  if (isValidRedirect && !samePath) {
    window.location.href = redirect;
  }
})();
