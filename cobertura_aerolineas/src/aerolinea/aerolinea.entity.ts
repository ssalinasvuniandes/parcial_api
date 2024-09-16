/* eslint-disable prettier/prettier */
import { AeropuertoEntity } from 'src/aeropuerto/aeropuerto.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AerolineaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    fecha_fundacion: string;

    @Column()
    pagina_web: string;

    @ManyToMany(() => AeropuertoEntity, aeropuerto => aeropuerto.aerolineas)
    aeropuertos: AeropuertoEntity[];
}