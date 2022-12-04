import express from 'express';

import projectsRouter from './projects/routes';
import contactsRouter from './contacts/routes';
import defaultsRouter from './defaults/routes';

const indexRouter = express.Router();

indexRouter.use('/api/projects', projectsRouter);
indexRouter.use('/api/contacts', contactsRouter);
indexRouter.use('/api/defaults', defaultsRouter);
indexRouter.all('/api/*', (_, res) => {
  res.send('No such Endpoint');
});

// indexRouter.all('*', (_, res) => { res.send(path.join(__dirname, './../build/index.html')); });

export default indexRouter;
