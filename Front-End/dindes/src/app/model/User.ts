import { Postagem } from "./Postagem"

export class User{
    public id: number
    public nome: string
    public usuario: string
    public email: string
    public senha: string
    public dataNascimento: Date
    public area: string
    public telefone: string
    public sobre: string
    public foto: string
    public tipo: string
    public postagem: Postagem[]
    public dinde: User
    public apadrinhade: User[]
}