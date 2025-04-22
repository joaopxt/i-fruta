import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Entregador } from './entregador.entity';

@Entity()
export class ContaPagamento {
  @PrimaryColumn()
  entregadorId: number;

  @JoinColumn()
  @OneToOne(() => Entregador)
  entregador: Entregador;

  @Column()
  bancoNome: string;

  @Column()
  bancoCode: number;

  @Column()
  contaTipo: string;

  @Column()
  conta: string;

  @Column()
  agencia: string;

  @Column()
  cpf: string;
}
