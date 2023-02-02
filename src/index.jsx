import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { registerLincense } from '@syncfusion/ej2';
import { ContextProvider } from './contexts/ContextProvider';
import './index.css';
import App from './App';

// registerLincense(
// 'Mgo+DSMBaFt/QHRqVVhkVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jS35RdkRmX3tYcXJTRQ==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdEVhWX5bdnBTR2hcVA==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjW39fdXJRQGFVVEE=;MTA1MTU0NUAzMjMwMmUzNDJlMzBHdlorVzF3NkN3VUVXUWVjUVVUZ3duKzBhZEpYazZkUXFSdFdnWG1lKzBRPQ==;MTA1MTU0NkAzMjMwMmUzNDJlMzBhdFBZSlV0RDBOTHl0QUZVbWJaMTJ0eTBMTEQ3SisxVlpaODVHSVZ2THJvPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVhWX1ecXFTQmZeVkx/;MTA1MTU0OEAzMjMwMmUzNDJlMzBQdEZ2U0R1RXJmRGQ0dFk0aXNSNk5TTlFpSVlTOFZ4OEk4TmRiNUxuUDRVPQ==;MTA1MTU0OUAzMjMwMmUzNDJlMzBFN2tVVnQzMGh1RnMvSzdNZ2w5aWxGUkEwVXJvZ2lEanNJdExVWDNKWjdzPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjW39fdXJRQGNZVEA=;MTA1MTU1MUAzMjMwMmUzNDJlMzBqQWN6SkdpT3FzbzdhaUlxRnlUY3U1VGZ0Z05NWjg2Mzc5V3ZBNlh1YStBPQ==;MTA1MTU1MkAzMjMwMmUzNDJlMzBtTzNFbzQrL21reGQzTDBnVUhLYUE0aG1adHJRZzJEVGlRRVhEd2dxN1dzPQ==;MTA1MTU1M0AzMjMwMmUzNDJlMzBQdEZ2U0R1RXJmRGQ0dFk0aXNSNk5TTlFpSVlTOFZ4OEk4TmRiNUxuUDRVPQ=='
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>,
);
