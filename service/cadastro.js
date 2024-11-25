import { salvaCliente } from "../database/clientes.js";
import { formataEndereco } from "../util/shared.js"
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