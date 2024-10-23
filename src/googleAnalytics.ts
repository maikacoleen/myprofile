// src/googleAnalytics.ts
declare global {
    interface Window {
      dataLayer: any[];
    }
  }
  
  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }
  
  gtag('js', new Date());
  gtag('config', 'G-GT2SQ2VNB1');
  
  export {};