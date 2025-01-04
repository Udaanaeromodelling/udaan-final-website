export const trackPageView = (url) => {
    if (window.gtag) {
      window.gtag("config", "G-VR5QWV2SB0", {
        page_path: url,
      });
    }
  };
  