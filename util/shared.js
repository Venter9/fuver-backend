export let formataEndereco = (formJSON) =>{
    let enderecoCompleto = `${formJSON.endereco}, ${formJSON.numero || 'S/N'} - ${formJSON.bairro}, ${formJSON.cidade}/${formJSON.estado} (CEP: ${formJSON.cep})${formJSON.complemento ? ', ' + formJSON.complemento : ''}${formJSON.referencia ? ' - Ref: ' + formJSON.referencia : ''}`;
    return enderecoCompleto
}