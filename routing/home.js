// 🏗 Stwórz funkcję 'homeRouting', która obsłuży stronę główną.
// 🏗 Ustaw odpowiedni nagłówek 'Content-Type'.
// Podpowiedź: response.setHeader("Content-Type", "text/html");
// 🏗 Zakończ odpowiedź HTTP po wyrenderowaniu strony.
// Podpowiedź: return response.end();

// 🔧 Wyeksportuj funkcję 'homeRouting', aby inne moduł mogły jej używać.
const homeRouting = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Shop – Home</title>
        </head>
        <body>
            <h1>Home</h1>
            <nav>
                <a href="/product/add">Add product</a> |
                <a href="/product/new">Newest product</a> |
                <a href="/logout">Logout</a>
            </nav>
        </body>
        </html>
    `);
};
module.exports = homeRouting;
