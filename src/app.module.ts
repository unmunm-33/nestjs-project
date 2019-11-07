import { Module } from "@nestjs/common";
import { SongModule } from "./song/song.module";
import { TypeOrmModule } from "@nestjs/typeorm";
@Module({
  imports: [TypeOrmModule.forRoot(), SongModule]
})
export class AppModule {}
