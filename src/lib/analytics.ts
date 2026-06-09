const GA_MEASUREMENT_ID = "G-93JDFXL6PX";

type AnalyticsCommand = ["js", Date] | ["config", string];

declare global {
  interface Window {
    dataLayer: AnalyticsCommand[];
    gtag?: (...args: AnalyticsCommand) => void;
  }
}

export function bootstrapAnalytics() {
  if (!import.meta.env.PROD || import.meta.env.VITE_ENABLE_ANALYTICS !== "true") {
    return;
  }

  if (document.querySelector(`script[data-ga="${GA_MEASUREMENT_ID}"]`)) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: AnalyticsCommand) {
      window.dataLayer.push(args);
    };

  window.gtag("js", new Date());

  const injectAnalytics = () => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    script.dataset.ga = GA_MEASUREMENT_ID;
    document.head.appendChild(script);
    window.gtag?.("config", GA_MEASUREMENT_ID);
  };

  window.addEventListener(
    "load",
    () => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback?.(() => injectAnalytics(), { timeout: 3000 });
        return;
      }

      setTimeout(injectAnalytics, 1500);
    },
    { once: true }
  );
}
