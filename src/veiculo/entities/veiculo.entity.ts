import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Entregador } from '../../entities/entregador.entity';

@Entity()
export class Veiculo {
  @PrimaryColumn()
  entregadorId: number;

  @JoinColumn()
  @OneToOne(() => Entregador)
  entregador: Entregador;

  @Column()
  tipo: string;

  @Column({ nullable: true })
  placa: string;

  @Column({ nullable: true })
  renavam: number;
}
