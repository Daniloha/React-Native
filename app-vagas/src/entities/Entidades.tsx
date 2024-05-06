/*
 *                   ENTIDADES
 * 
 *    NESTE FICHEIRO ENCONTRAM-SE AS NOSSAS CLASSES ONDE
 * INSTANCIAMOS E ORGANIZAMOS NOSSAS ENTIDADES (USUARIOS,
 * ADMINISTRADORES, VAGAS, ETC.). UTILIZAMOS OS RECURSOS DO
 * PARADIGMA ORIENTADO A OBJETOS PARA ORGANIZAR NOSSAS CLASSES E
 * MÉTODOS, COMO HERANÇA, POLIMORFISMO, ENCAPSULAMENTO E REUSO.
 * 
* ---------------------------------------------------------------
 *
 *                     ESTRUTURA DO CONTEÚDO
 *
 *      1 - ENUMERADORES
 *      2 - CLASSES
 *          2.1 - ATRIBUTOS
 *            2.1.1 - TIPOS
 *            2.1.2 - ENCAPSULAMENTO 1
 *          2.2 - CONSTRUTORES
 *          2.3 - MÉTODOS
 *      3 - CLASSE VAGAS
 *          3.1 - ENCAPSULAMENTO 2
 *      4 - CLASSE CONTA (MÃE)
 *          4.1 - COMPOSIÇÃO
 *      5 - CLASSE COMUM
 *          5.1 - HERANÇA
 *      6 - CLASSE ESTUDANTE
 *          6.1 - REUSO
 *      7 - CLASSE ADMINISTRADOR
 *          7.1 - POLIMOSFISMO
 *      
 *
 * ---------------------------------------------------------------
 *
 */

/*
 *                    1 - ENUMERADORES
 * 
 *  A FIM DE MELHORAR A ORGANIZAÇÃO DE NOSSAS CLASSES, CRIAMOS 
 * ENUMERADORES COMO 'TYPE' DE ATRIBUTOS QUE JULGAMOS NECESSÁRIO A 
 * UTILIZAÇÃO DESTE RECURSO. OS ENUMERADORES FUNCIONAM COMO UMA 
 * TIPAGEM DE DADOS LIMITADA POR UMA LISTA DE VALORES DETERMINADOS.
 * SERVE PARA RESTRINGIR O QUE PODE SER INTRODUZIDO NAQUELA 
 * VARIÁVEL, ALÉM DE VALIDAR O SEU VALOR DENTRO DA LÓGICA DO 
 * SISTEMA.
 */

enum TipoDeConta { // ENUMERADOR PARA OS TIPOS DE CONTA
  COMUM = 'Comum',
  ESTUDANTE = 'Estudante',
  ADMINISTRADOR = 'Administrador',
}

enum TipoDeVaga { // ENUMERADOR PARA OS TIPOS DE VAGA
  ESTAGIO = 'Estágio',
  TRAINEE = 'Trainee',
  EFETIVO = 'Efetivo',
}

/*
 *                    2 - CLASSES
 * 
 *  A FIM DE MELHORAR A ORGANIZAÇÃO DE NOSSAS CLASSES, CRIAMOS 
 * ENUMERADORES COMO 'TYPE' DE ATRIBUTOS QUE JULGAMOS NECESSÁRIO A 
 * UTILIZAÇÃO DESTE RECURSO. OS ENUMERADORES FUNCIONAM COMO UMA 
 * TIPAGEM DE DADOS LIMITADA POR UMA LISTA DE VALORES DETERMINADOS.
 * SERVE PARA RESTRINGIR O QUE PODE SER INTRODUZIDO NAQUELA 
 * VARIÁVEL, ALÉM DE VALIDAR O SEU VALOR DENTRO DA LÓGICA DO 
 * SISTEMA.
 */

export class Vaga {
  idVaga: number;
  tituloVaga: string;
  descricaoVaga: string;
  quantidadeVaga: number;
  cursoVaga: string;
  semestreVaga: string;
  tipoVaga: TipoDeVaga;

  constructor(
    idVaga: number,
    tituloVaga: string,
    descricaoVaga: string,
    quantidadeVaga: number,
    cursoVaga: string,
    semestreVaga: string,
    tipoVaga: TipoDeVaga
  ) {
    this.idVaga = idVaga;
    this.tituloVaga = tituloVaga;
    this.descricaoVaga = descricaoVaga;
    this.quantidadeVaga = quantidadeVaga;
    this.cursoVaga = cursoVaga;
    this.semestreVaga = semestreVaga;
    this.tipoVaga = tipoVaga;
  }
}

class Conta {
  private _idUsuario!: number;
  private _timestamp!: Date;
  private _datainicial: Date;
  private _tipoConta!: TipoDeConta;
  private _email!: string;
  private _senha!: string;
  vagas: Vaga[] = [];

  get idUsuario(): number { return this._idUsuario; }
  set idUsuario(value: number) { this._idUsuario = value; }

  get timestamp(): Date { return this._timestamp; }
  set timestamp(value: Date) { this._timestamp = value; }

  get tipoConta(): TipoDeConta { return this._tipoConta; }
  set tipoConta(value: TipoDeConta) { this._tipoConta = value; }

  get email(): string { return this._email; }
  set email(value: string) { this._email = value; }

  get senha(): string { return this._senha; }
  set senha(value: string) { this._senha = value; }



  adicionarVaga(vaga: Vaga): void {
    this.vagas.push(vaga);
  }

  removerVaga(vaga: Vaga): void {
    this.vagas = this.vagas.filter((v) => v !== vaga);
  }
}

export class Comum extends Conta {
  private _nome: string;
  private _cpf: number;

  constructor(
    idUsuario: number,
    timestamp: Date,
    nome: string,
    cpf: number,
    tipoConta: TipoDeConta,
    senha: string,
    email: string,
    vagas: Vaga[]
  ) {
    super();
    this.timestamp = timestamp;
    this.idUsuario = idUsuario;
    this.tipoConta = tipoConta;
    this._nome = nome;
    this.email = email;
    this._cpf = cpf;
    this.senha = senha;
    this.vagas = vagas;
  }

  get nome(): string { return this._nome; }
  set nome(value: string) { this._nome = value; }

  get cpf(): number { return this._cpf; }
  set cpf(value: number) { this._cpf = value; }
}


export class Estudante extends Comum {
  private _matricula: string;
  private _curso: string;
  private _semestre: string;

  constructor(
    timestamp: Date,
    id: number,
    nome: string,
    cpf: number,
    tipoConta: TipoDeConta,
    senha: string,
    email: string,
    vagas: Vaga[],
    matricula: string,
    curso: string,
    semestre: string
  ) {
    super(id, timestamp, nome, cpf, tipoConta, senha, email, 
    vagas);
    this._matricula = matricula;
    this._curso = curso;
    this._semestre = semestre;
  }
  get matricula(): string { return this._matricula; }
  set matricula(value: string) { this._matricula = value; }

  get curso(): string { return this._curso; }
  set curso(value: string) { this._curso = value; }

  get semestre(): string { return this._semestre; }
  set semestre(value: string) { this._semestre = value; }
}

export class Administrador extends Conta{
  cadastrarVaga(vaga: Vaga): void {
    this.vagas.push(vaga);
  }
  removerVaga (vaga: Vaga): void {
    this.vagas = this.vagas.filter((v) => v !== vaga);
  }
  selecionarVaga(index: number): Vaga | undefined {
    if (index >= 0 && index < this.vagas.length) {
        return this.vagas[index];
    }
    return undefined;
}
}


