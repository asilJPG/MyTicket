import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3003;

  app.listen(port, () => {
    console.log(`Server active in ${port} port`);
  });
};
start();
