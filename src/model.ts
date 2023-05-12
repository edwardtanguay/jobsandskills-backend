import fs from 'fs';
import {IJob} from './interfaces.js';

const jobs: IJob[] = JSON.parse(fs.readFileSync('./src/data/jobs.json', 'utf8'));

export const getJobs = () => {
	return jobs;
}

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