/**
 * Very‑small helper around the global `gtag()` function that GA4 injects.
 *
 * Why bother?
 *  • Gives you a single import (`gtag`) instead of sprinkling
 *    `window.gtag('event', …)` all over the app.
 *  • Optional‑chaining (`?.`) turns the call into a NO‑OP while the script
 *    is still loading or during server‑side rendering (if ever added).
 *
 * @param {string} eventName  The GA4 event name (e.g., 'project_card_open').
 * @param {object} params     Flat object of extra parameters (key/value pairs).
 */
export const gtag = (eventName, params = {}) => {
    // Forward the event to Google Analytics *only if* gtag is defined.
    // If it's undefined (script blocked, ad‑blocker, etc.) nothing crashes.
    window.gtag?.('event', eventName, params);
  };
  