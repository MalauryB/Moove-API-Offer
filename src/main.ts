import { NestFactory } from '@nestjs/core';
import { OfferModule } from './offer.module';
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(OfferModule);
  app.use(cors());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
