import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Entregador } from './entities/entregador.entity';
import { Veiculo } from './entities/veiculo.entity';
import { Estabelecimento } from './entities/estabelecimento.entity';
import { Endereco } from './entities/endereco.entity';
import { Cidade } from './entities/cidade.entity';
import { Uf } from './entities/uf.entity';
import { Corrida } from './entities/corrida.entity';

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
        cpf: 36098712377,
      });

      await db.save(entregadorTeste);
      const entregadorTeste2 = db.create(Entregador, {
        nome: 'Pedro Victor',
        celular: 61982477725,
        dataNascimento: 17102000,
        cpf: 48098712327,
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
      await db.save(enderecoTeste1);

      const enderecoTeste2 = db.create(Endereco, {
        entregador: entregadorTeste2,
        cep: 71984240,
        numero: 22,
        complemento: 'Ed. Top Life, AP 302',
        rua: 'Avenida das Castanheiras, 901',
      });
      await db.save(enderecoTeste2);

      const cidade1 = db.create(Cidade, {
        nome: 'Águas Claras',
        assignee: [enderecoTeste1],
      });
      await db.save(cidade1);

      enderecoTeste1.cidade = cidade1;
      await db.save(enderecoTeste1);
      enderecoTeste2.cidade = cidade1;
      await db.save(enderecoTeste2);

      const uf1 = db.create(Uf, {
        nome: 'DF',
        assignee: [enderecoTeste1],
      });
      await db.save(uf1);

      enderecoTeste1.uf = uf1;
      await db.save(enderecoTeste1);
      enderecoTeste2.uf = uf1;
      await db.save(enderecoTeste2);

      const corrida1 = db.create(Corrida, {
        endereco: enderecoTeste2,
        estabelecimento: estabelecimentoTeste3,
        dataHorario: new Date().toLocaleDateString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }),
        preco: 10.32,
        pedido: '10 bananas',
        cliente: 'Ana Vitória',
        entregador: entregadorTeste,
      });
      await db.save(corrida1);
    });
  }
}
