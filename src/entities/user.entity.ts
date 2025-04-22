import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Entregador } from './entregador.entity';

@Entity()
export class User {
  @PrimaryColumn()
  entregadorId: number;

  @JoinColumn()
  @OneToOne(() => Entregador)
  entregador: Entregador;

  @Column()
  usuario: string;

  @Column()
  senha: string;

  @Column()
  email: string;
}
