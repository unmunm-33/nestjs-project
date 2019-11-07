import { Module } from "@nestjs/common";
import { SongController } from "./song.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Song } from "./song.entity";

@Module({
  controllers: [SongController],
  imports: [TypeOrmModule.forFeature([Song])]
})
export class SongModule {}
