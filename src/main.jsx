import React from 'react'
import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";



Sentry.init({
  dsn: "https://a0915452890e7b630a322438781837d2@o4508722827231232.ingest.us.sentry.io/4508722841452544",
  integrations: [
    Sentry.replayIntegration(),
  ],
    // Session Replay
    replaysSessionSampleRate: 1.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
;

// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<App />);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 