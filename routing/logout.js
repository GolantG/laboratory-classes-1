// 🏗 Stwórz funkcję 'logoutRouting', która obsłuży stronę wylogowania.
// 🏗 Ustaw odpowiedni nagłówek 'Content-Type'.
// Podpowiedź: response.setHeader("Content-Type", "text/html");
// 🏗 Zakończ odpowiedź HTTP po wyrenderowaniu strony.
// Podpowiedź: return response.end();

// 🔧 Wyeksportuj funkcję 'logoutRouting', aby inne moduł mogły jej używać.
const logoutRouting = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Shop – Logout</title>
        </head>
        <body>
            <h1>Logout</h1>
            <nav>
                <a href="/">Home</a> |
                <a href="/kill">Logout from application</a>
            </nav>
        </body>
        </html>
    `);
};
module.exports = logoutRouting;