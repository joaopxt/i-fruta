import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entregador } from './entities/entregador.entity';
import { CreateEntregadorDto } from './dto/create-entregador.dto';
import { UpdateEntregadorDto } from './dto/update-entregador.dto';
import { Estabelecimento } from '../entities/estabelecimento.entity';

@Injectable()
export class EntregadorService {
  constructor(
    @InjectRepository(Entregador)
    private entregadorRepository: Repository<Entregador>,

    @InjectRepository(Estabelecimento)
    private estabelecimentoRepository: Repository<Estabelecimento>,
  ) {}

  async create(createEntregadorDto: CreateEntregadorDto): Promise<Entregador> {
    const entregador = this.entregadorRepository.create(createEntregadorDto);
    return this.entregadorRepository.save(entregador);
  }

  findAll() {
    return this.entregadorRepository.find({
      relations: ['estabelecimentos', 'corridas'],
    });
  }

  findOne(id: number) {
    return this.entregadorRepository.findOne({
      where: { id },
      relations: ['estabelecimentos', 'corridas'],
    });
  }

  async update(
    id: number,
    updateEntregadorDto: UpdateEntregadorDto,
  ): Promise<Entregador> {
    const entregador = await this.entregadorRepository.findOneBy({ id });

    if (!entregador) {
      throw new Error('Entregador não encontrado');
    }

    Object.assign(entregador, updateEntregadorDto);

    return this.entregadorRepository.save(entregador);
  }

  async remove(id: number) {
    await this.entregadorRepository.delete(id);
    return { deleted: true };
  }
}
