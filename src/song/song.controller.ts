import { Controller, Get } from "@nestjs/common";

@Controller("songs")
export class SongController {
  @Get()
  public index() {
    return "oi";
  }
}
