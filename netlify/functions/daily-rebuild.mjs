// Scheduled Netlify Function — triggers a site rebuild every day at 6am UTC so
// blog posts scheduled via `pubDate` in src/content/blog/ go live automatically
// once their publish date arrives (the site is static, so it needs a fresh
// build to reflect date-based filtering).
//
// Requires a Build Hook URL, created in the Netlify dashboard under
// Site settings -> Build & deploy -> Build hooks, set as the
// NETLIFY_BUILD_HOOK environment variable for this site.

export default async () => {
  const hookUrl = process.env.NETLIFY_BUILD_HOOK;

  if (!hookUrl) {
    console.error('NETLIFY_BUILD_HOOK is not set — skipping scheduled rebuild.');
    return new Response('Missing NETLIFY_BUILD_HOOK', { status: 500 });
  }

  const response = await fetch(hookUrl, { method: 'POST' });

  return new Response(`Rebuild triggered, build hook responded with ${response.status}`, {
    status: response.ok ? 200 : 502,
  });
};

export const config = {
  schedule: '0 6 * * *',
};
