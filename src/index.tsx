import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import store from './store';

import reportWebVitals from './reportWebVitals';
import App from './App';
import { SearchProvider } from './context/searchContext';
import AppProvider from './context/context';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <BrowserRouter>
      <Provider store={store}>
         <AppProvider>
            <SearchProvider>
               <QueryClientProvider client={queryClient}>
                  <App />
               </QueryClientProvider>
            </SearchProvider>
         </AppProvider>
      </Provider>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
