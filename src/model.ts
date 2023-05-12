import fs from 'fs';
import { IBook, IRawBook } from './interfaces.js';

// const rawBooks: IRawBook[] = JSON.parse(fs.readFileSync('./src/data/rawBooks.json', 'utf8'));

// const books: IBook[] = rawBooks.map(rawBook => {
// 	return {
// 		id: rawBook.id,
// 		idCode: rawBook.idCode,
// 		title: rawBook.title,
// 		description: rawBook.description,
// 		language: rawBook.language === '' ? 'english' : rawBook.language
// 	}
// });

export const getApiInstructions = () => {
	return `
<style>
	body {
		background-color: #444;
		padding: 1rem;
		color: #fff;
		font-family: courier;
	}
	code {
		background-color: #333;
	}
</style>
<h1>Jobs/Skills Site</h1>

	`;
}

// export const getBooks = (): IBook[] => {
// 	return books;
// }

// export const getBook = (id: number): IBook => {
// 	return books.find(m => m.id === id);
// }
