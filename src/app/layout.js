import './globals.css';
import './style.css';

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head/>
        <body>{children}</body>
        </html>
    );
}
