import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Entregador } from './entregador.entity';
import { Endereco } from './endereco.entity';
import { Estabelecimento } from './estabelecimento.entity';

@Entity()
export class Corrida {
  @PrimaryGeneratedColumn()
  corridaId: number;

  @JoinColumn()
  @OneToOne(() => Endereco)
  endereco: Endereco;

  @JoinColumn()
  @OneToOne(() => Estabelecimento)
  estabelecimento: Estabelecimento;

  @Column()
  dataHorario: Date;

  @Column()
  preco: number;

  @Column()
  pedido: string;

  @Column()
  cliente: string;

  @ManyToOne(() => Entregador, (entregador) => entregador.corridas)
  entregador: Entregador;
}
