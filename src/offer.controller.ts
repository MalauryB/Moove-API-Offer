import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response} from 'express';
import data = require('./offers.json');

@Controller('offer')
export class OfferController {
  constructor() {}

  @Get('shop/:id')
  findOffersByShop(@Res() res : Response){
    res.status(HttpStatus.OK).json(data);
  }
}
