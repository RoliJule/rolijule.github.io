import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gtag } from '../lib/ga';

/**
 * React hook that fires a GA4 `page_view` every time the SPA route changes.
 *
 * ▸ Call this once near the top of your component tree
 *   (in Layout.jsx or App.jsx) so it runs on every navigation.
 * ▸ Works with React‑Router v6, but you can adapt to any router that
 *   exposes the current path.
 */
export default function usePageView() {
  // React‑Router's location object gives us pieces of the current URL.
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    /**
     * In GA4, a "page_view" typically needs:
     *   • page_location → full URL (includes protocol + host)
     *   • page_path     → path + query + hash (no protocol/host)
     *
     * We send both so GA's reports match what you'd see on a multi‑page site.
     */
    gtag('page_view', {
      page_location: window.location.href,
      page_path: pathname + search + hash
    });
    // Effect re‑fires whenever pathname, search, or hash change.
  }, [pathname, search, hash]);
}
