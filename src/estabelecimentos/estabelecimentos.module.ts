import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstabelecimentoService } from './estabelecimentos.service';
import { EstabelecimentosController } from './estabelecimentos.controller';
import { Estabelecimento } from '../entities/estabelecimento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estabelecimento])],
  controllers: [EstabelecimentosController],
  providers: [EstabelecimentoService],
})
export class EstabelecimentosModule {}
