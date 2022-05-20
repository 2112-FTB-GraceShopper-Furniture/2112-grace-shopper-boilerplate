const client = require('../db');
const express = require('express');
const apiRouter = express.Router();
const { JWT_SECRET } = process.env;
const { getUserById } = require('../db/users');
const jwt = require('jsonwebtoken');


apiRouter.use(async (req, res, next) => {
	const prefix = 'Bearer ';
	const auth = req.header('Authorization');

	if (!auth) {
		next();
	} else if (auth.startsWith(prefix)) {
		const token = auth.slice(prefix.length);

		try {
			const { id } = jwt.verify(token, JWT_SECRET);
			if (id) {
				req.user = await getUserById(id);
				next();
			}
		} catch ({ name, message }) {
			next({ name, message });
		}
	} else {
		next({
			name: 'AuthorizationHeaderError',
			message: `Authorization token must start with ${prefix}`
		});
	}
});

apiRouter.get('/health', async (req, res, next) => {
	try {
		res.send({ message: 'server is up and running!' });
	} catch ({ name, message }) {
		next({ name, message });
	}
});

apiRouter.use((req, res, next) => {
	if (req.user) {
		console.log('User is set:', req.user);
	}
	next();
});


apiRouter.get('/', (req, res, next) => {
  res.send({
    message: 'API is under construction!',
  });
});

apiRouter.get('/health', (req, res, next) => {
  res.send({
    healthy: true,
  });
});


const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

module.exports = apiRouter;



