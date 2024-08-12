const assert = require('assert'); 
const { JSDOM } = require('jsdom'); 
const html = `<html lang="es"><head><meta charset="UTF-8"><title>Hola Mundo</title></head><body><h1>Hola Mundo</h1></body></html>`; 
const dom = new JSDOM(html); 
const title = dom.window.document.querySelector('title').textContent; 
assert.strictEqual(title, 'Hola Mundo', 'El t�tulo de la p�gina debe ser "Hola Mundo"'); 
console.log('Test Passed'); 
