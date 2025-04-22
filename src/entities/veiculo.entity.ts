import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Entregador } from './entregador.entity';

@Entity()
export class Veiculo {
  @PrimaryColumn()
  entregadorId: number;

  @JoinColumn()
  @OneToOne(() => Entregador)
  entregador: Entregador;

  @Column()
  tipo: string;

  @Column()
  placa: string;

  @Column()
  renavam: number;
}
