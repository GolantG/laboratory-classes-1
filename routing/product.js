// 📦 Zaimportuj moduły 'fs' oraz 'STATUS_CODE' do obsługi produktów.

// 🏗 Stwórz funkcję 'productRouting', która obsłuży żądania dotyczące produktów.

// 🏗 Stwórz funkcję 'renderAddProductPage', która wyrenderuje stronę dodawania produktu.

// 🏗 Stwórz funkcję 'renderNewProductPage', która wyświetli najnowszy produkt z pliku 'product.txt'.
// Podpowiedź: fileSystem.readFile(...);

// 🏗 Stwóz funkcję 'addNewProduct', która obsłuży dodawanie nowego produktu, zapisywanie go do pliku 'product.txt' oraz przeniesie użytkownika na stronę '/product/new'.
// Podpowiedź: fileSystem.writeFile(...);
// Podpowiedź: response.setHeader("Location", "/product/new");

// 🔧 Wyeksportuj funkcję 'productRouting', aby inne moduł mogły jej używać.
const fs = require('fs');
const STATUS_CODE = require('../constants/statusCode');

const productRouting = (req, res) => {
    if (req.url === '/product/add' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <!DOCTYPE html>
            <html>
            <head><title>Shop – Add product</title></head>
            <body>
                <h1>Add product</h1>
                <form action="/product/add" method="POST">
                    <input type="text" name="name" placeholder="Product name" required>
                    <input type="text" name="description" placeholder="Description" required>
                    <button type="submit">Add</button>
                </form>
                <nav>
                    <a href="/">Home</a> |
                    <a href="/product/new">Newest product</a> |
                    <a href="/logout">Logout</a>
                </nav>
            </body>
            </html>
        `);
    } else if (req.url === '/product/add' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            fs.writeFileSync('product.txt', body);
            res.writeHead(STATUS_CODE.FOUND, { Location: '/product/new' });
            res.end();
        });
    } else if (req.url === '/product/new') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const content = fs.existsSync('product.txt') ? fs.readFileSync('product.txt', 'utf-8') : 'No new products';
        res.end(`
            <!DOCTYPE html>
            <html>
            <head><title>Shop – Newest product</title></head>
            <body>
                <h1>Newest product</h1>
                <p>${content}</p>
                <nav>
                    <a href="/">Home</a> |
                    <a href="/product/add">Add product</a> |
                    <a href="/logout">Logout</a>
                </nav>
            </body>
            </html>
        `);
    } else {
        console.error(`ERROR: requested url ${req.url} doesn’t exist.`);
        res.writeHead(STATUS_CODE.NOT_FOUND);
        res.end('<h1>404 Not Found</h1>');
    }
};
module.exports = productRouting;
