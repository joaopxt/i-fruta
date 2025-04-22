import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Entregador } from '../../entities/entregador.entity';

@Entity()
export class Estabelecimento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  horarioFuncionamento: string;

  @Column()
  foto: string;

  @ManyToMany(() => Entregador, (entregador) => entregador.estabelecimentos)
  entregadores: Entregador[];
}
