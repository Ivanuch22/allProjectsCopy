import {Column, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../../users/entities/user.entity";

@Entity("files")
export class FileEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    filename: string;

    @Column()
    originalName: string;


    @Column()
    size: string;

    @Column()
    mimetype: string;

    @ManyToOne(()=>UserEntity, (user)=>user.files)
    user:UserEntity;

    @DeleteDateColumn()
    deletedAd?: Date;
}