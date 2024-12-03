import { atualizaCliente, buscaClientePorCPFouCNPJ, buscaClientePorUUID, deletaCliente, salvaCliente } from "../database/clientes.js";
import { formataEndereco, formatarCNPJ, formatarCPF } from "../util/shared.js"
import { v4 as uuidv4 } from 'uuid';

let mapeiaFormularioParaCliente = (formulario) => {
    let enderecoCompleto = formataEndereco(formulario)
    let cliente = {
        uuid: uuidv4(),
        nomeEstabelecimento: formulario.nomeEstabelecimento,
        documentoComercial: formulario.documentoComercial,
        documento: formulario.documento,
        telefoneContato: formulario.telefoneContato,
        telefoneWhatsApp: formulario.telefoneWhatsApp,
        emailcontato: formulario.emailcontato,
        nomeResponsavel: formulario.nomeResponsavel,
        telefoneResponsavel: formulario.telefoneResponsavel,
        horarioInicial: formulario.horarioInicial,
        horarioFinal: formulario.horarioFinal,
        termos: formulario.termos,
        enderecoCompleto
    }
    return cliente
}

export let cadastrarCliente = (formulario) => {
    let cliente = mapeiaFormularioParaCliente(formulario)
    salvaCliente(cliente)
}
//busca
export let buscarClientePorUuid = (uuid) => {
    let cliente = buscaClientePorUUID(uuid)
    return cliente
}
export let buscarClientePorCpfouCnpj = (doc, tipo) => {
    let docFormatado
    if (tipo == "cpf") {
        docFormatado = formatarCPF(doc)
    } else {
        docFormatado = formatarCNPJ(doc)
    }
    
    let cliente = buscaClientePorCPFouCNPJ(docFormatado,tipo)
    return cliente
}
//delet
export let deletarCliente = (uuid) => {
    let deletou = deletaCliente(uuid)
    return deletou
}
//update
export let atualizarCliente = (uuid, formulario) => {
    let novoCliente = mapeiaFormularioParaCliente(formulario)
    novoCliente.uuid = uuid
    let atualizou = atualizaCliente(uuid, novoCliente)
    return atualizou
}

