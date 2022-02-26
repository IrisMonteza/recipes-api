import mongoose, { ConnectOptions } from 'mongoose';
import config from './config/config';

mongoose.connect(config.DB.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
} as ConnectOptions);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Mongodb connetion stablished');
});
connection.on('error', (err) => {
  console.log(err);
  process.exit(0);
});
