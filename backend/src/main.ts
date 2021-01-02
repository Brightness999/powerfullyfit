import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders: 'X-Requested-With,Content-Type,Accept,Origin',
  });

  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
      whitelist: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.setGlobalPrefix('api');

  const options = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
