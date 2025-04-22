import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Estabelecimento } from './estabelecimento.entity';

@Entity()
export class Entregador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  celular: number;

  @Column()
  dataNascimento: number;

  @ManyToMany(
    () => Estabelecimento,
    (estabelecimento) => estabelecimento.entregadores,
  )
  @JoinTable() // This decorator is required on one side of the relationship
  estabelecimentos: Estabelecimento[];
}
