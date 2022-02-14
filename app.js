import './src/config/environment.config';
import http from 'http';
import server from './src/config/server.config';
import loggers from './src/utils/logger.utils';


const port = process.env.PORT || 3000;

const appServer = http.createServer(server);

appServer.on('listening', () => {
    const logger = loggers.get('app-logger')
    if (process.env.NODE_ENV !== 'testing') {
      logger.info(
        `Server ${process.env.API_NAME} running on port ${process.env.PORT}.`
      )
    }
  })
  
  appServer.on('error', error => {
    const logger = loggers.get('app-logger')
    logger.error(
      `Ups. Error: ${error}`
    )
  })
  
  appServer.on('close', () => {
    const logger = loggers.get('app-logger')
    if (process.env.NODE_ENV !== 'testing') {
      logger.info('Closing the server instance...')
    }
  })
  
  if (process.env.NODE_ENV !== 'testing') {
    appServer.listen(port)
  }

  export default {
      appServer
  }