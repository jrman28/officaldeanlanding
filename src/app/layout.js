import './globals.css';
import { Helmet } from 'react-helmet';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Helmet>
        <title>The Dean At Maverick</title>
        <meta name="description" content="Airbnb style landing page created by JustDesign" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Tangerine:wght@700&family=Playfair+Display&display=swap" />
      </Helmet>
      <body>{children}</body>
    </html>
  );
}
