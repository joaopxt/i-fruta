import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntregadorService } from './entregador.service';
import { EntregadorController } from './entregador.controller';
import { Entregador } from '../entities/entregador.entity';
import { Estabelecimento } from '../entities/estabelecimento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Entregador, Estabelecimento])],
  controllers: [EntregadorController],
  providers: [EntregadorService],
})
export class EntregadorModule {}
