import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
//	Por padrão o expresse não entende json
app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..' , 'uploads')));

//	request param: parametros que vem na propria rota que identifica um return
//	query params: parametros que vem na propria rota geralmente opcionais para filtros, paginação

//	SELECT * FROM users WHERE name = 'Diego'
//	knex('users).where('name', 'Diego').select('*)

// const users = [
// 	'diego',
// 	'clieton',
// 	'robson',
// 	'felipe'
// ]


// app.get('/users/:id', (request, response) => {
// 	const id = Number(request.params.id);

// 	const user = users[id];

// 	return response.json(user);
// });

// app.post('/users', (request, response) => {
// 	const data = request.body;

// 	const user = {
// 		name: data.name,
// 		email: data.email
// 	}
// 	response.json(user);
// });

app.use(errors());

app.listen(3333);
