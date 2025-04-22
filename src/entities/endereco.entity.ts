import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Entregador } from './entregador.entity';
import { Cidade } from './cidade.entity';

@Entity()
export class Endereco {
  @PrimaryColumn()
  entregadorId: number;

  @JoinColumn()
  @OneToOne(() => Entregador)
  entregador: Entregador;

  @Column()
  cep: number;

  @Column()
  numero: number;

  @Column()
  complemento: string;

  @Column()
  rua: string;

  @ManyToOne(() => Cidade, (cidade) => cidade.assignee)
  cidade: Cidade;
}
