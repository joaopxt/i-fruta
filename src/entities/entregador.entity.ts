import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Estabelecimento } from './estabelecimento.entity';
import { Corrida } from './corrida.entity';

@Entity()
export class Entregador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  celular: number;

  @Column()
  cpf: number;

  @Column()
  dataNascimento: number;

  @ManyToMany(
    () => Estabelecimento,
    (estabelecimento) => estabelecimento.entregadores,
  )
  @JoinTable()
  estabelecimentos: Estabelecimento[];

  @OneToMany(() => Corrida, (corrida) => corrida.entregador)
  corridas: Corrida[];
}
