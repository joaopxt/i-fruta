import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Entregador } from './entities/entregador.entity';
import { Veiculo } from './entities/veiculo.entity';
import { Estabelecimento } from './entities/estabelecimento.entity';
import { Endereco } from './entities/endereco.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async seed() {
    await this.dataSource.transaction(async (db) => {
      const entregadorTeste = db.create(Entregador, {
        nome: 'Joao Victor',
        celular: 61982477725,
        dataNascimento: 17102000,
      });

      await db.save(entregadorTeste);
      const entregadorTeste2 = db.create(Entregador, {
        nome: 'Pedro Victor',
        celular: 61982477725,
        dataNascimento: 17102000,
      });

      await db.save(entregadorTeste2);

      const veiculoTeste = db.create(Veiculo, {
        entregador: entregadorTeste,
        tipo: 'Motocicleta',
        placa: 'SGW7D27',
        renavam: 13245,
      });

      await db.save(veiculoTeste);

      const estabelecimentoTeste1 = db.create(Estabelecimento, {
        nome: 'Abbracio',
        horarioFuncionamento: 'Seg-Sab/10:00-22:00',
        foto: 'https://www.urlFoto.com/123',
        entregadorAtrelado: entregadorTeste,
      });
      await db.save(estabelecimentoTeste1);
      const estabelecimentoTeste2 = db.create(Estabelecimento, {
        nome: 'SushiLoko',
        horarioFuncionamento: 'Seg-Sex/12:00-23:59',
        foto: 'https://www.urlFoto.com/456',
        entregadorAtrelado: entregadorTeste,
      });
      await db.save(estabelecimentoTeste2);
      const estabelecimentoTeste3 = db.create(Estabelecimento, {
        nome: 'Caminito',
        horarioFuncionamento: 'Seg-Sex/09:00-23:59',
        foto: 'https://www.urlFoto.com/4948ASD',
        entregadorAtrelado: entregadorTeste2,
      });
      await db.save(estabelecimentoTeste3);

      entregadorTeste.estabelecimentos = [
        estabelecimentoTeste1,
        estabelecimentoTeste2,
        estabelecimentoTeste3,
      ];
      await db.save(entregadorTeste);

      entregadorTeste2.estabelecimentos = [
        estabelecimentoTeste2,
        estabelecimentoTeste3,
      ];
      await db.save(entregadorTeste2);

      const enderecoTeste1 = db.create(Endereco, {
        entregador: entregadorTeste,
        cep: 71931540,
        numero: 13,
        complemento: 'Ed. Águas Claras, AP 105',
        rua: 'Avenida das Araucárias, 1030',
      });
    });
  }
}
