import { Module } from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { VeiculoController } from './veiculo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Veiculo } from './entities/veiculo.entity';
import { Entregador } from 'src/entregador/entities/entregador.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Veiculo, Entregador]), // Register Veiculo and Entregador entities
  ],
  controllers: [VeiculoController],
  providers: [VeiculoService],
})
export class VeiculoModule {}
