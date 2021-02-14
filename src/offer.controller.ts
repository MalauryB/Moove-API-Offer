import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response} from 'express';
import dataOffersByShop = require('./offers.json');
import dataOfferById = require('./offerById.json');

@Controller('offer')
export class OfferController {
  constructor() {}

  @Get('shop/:id')
  findOffersByShop(@Res() res : Response){
    res.status(HttpStatus.OK).json(dataOffersByShop);
  }

  @Get('offer/:id')
  findOfferById(@Res() res : Response){
    res.status(HttpStatus.OK).json(dataOfferById);
  }
}
