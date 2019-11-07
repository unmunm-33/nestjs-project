import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import "reflect-metadata";
async function boostrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

boostrap();
