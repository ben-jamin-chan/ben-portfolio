import { createRoot } from 'react-dom/client';
import App from '@/App';
import { bootstrapAnalytics } from '@/lib/analytics';
import './index.css';

bootstrapAnalytics();

createRoot(document.getElementById('root')!).render(<App />);
