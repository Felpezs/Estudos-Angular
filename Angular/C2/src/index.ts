/**
 * Tipos primitivos: boolean, number, string
 */

let ligado:boolean = false
let valor:number = 120
let altura:number = 1.92
let nome:string = "Marcelo"

/**
 * Tipos especiais: null, any, undefined, void
 */

let nulo:null = null
let any_type:any = 'Aceita qualquer tipo'
let indefinido:undefined = undefined
let vazio:void

/**
 * Objetos: genericos, com estrutura
 */

//Generico
let produto:object = {
    nome: 'Detergente', 
    valor: 3
}

type ProdutoEstruturado = {
    nome: string,
    valor: number
}

//Estruturado
let produtoEstruturado:ProdutoEstruturado = {
    nome: 'Detergente',
    valor: 3
}

/**
 * Arrays: sem e com multitypes
 */

//Sem multitypes
let vetor:string[] = ['a','b','c']
let vetor2: Array<string> = ['a', 'b', 'c']

//Com multitypes
let vetorMultiplo:(string | number)[] = ['a', 1]

/**
 * Tuplas
 */

let tupla:[string, number, number] = ['agua', 1, 2]

/**
 * Datas
 */

let aniversario:Date = new Date("2023-05-19 11:03")