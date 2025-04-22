import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entregador } from './entities/entregador.entity';
import { Endereco } from './entities/endereco.entity';
import { Cidade } from './entities/cidade.entity';
import { Estabelecimento } from './entities/estabelecimento.entity';
import { Veiculo } from './entities/veiculo.entity';
import { EntregadorModule } from './entregador/entregador.module';
import { Corrida } from './entities/corrida.entity';
import { Uf } from './entities/uf.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([
      Entregador,
      Endereco,
      Cidade,
      Estabelecimento,
      Veiculo,
      Corrida,
      Uf,
    ]),
    EntregadorModule,
  ],
  // controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
