export let formataEndereco = (formJSON) =>{
    let enderecoCompleto = `${formJSON.endereco}, ${formJSON.numero || 'S/N'} - ${formJSON.bairro}, ${formJSON.cidade}/${formJSON.estado} (CEP: ${formJSON.cep})${formJSON.complemento ? ', ' + formJSON.complemento : ''}${formJSON.referencia ? ' - Ref: ' + formJSON.referencia : ''}`;
    return enderecoCompleto
}
export let formatarCPF = (input) => {  
    let value = input.replace(/\D/g, ''); 
    if (value.length > 11) {  
        value = value.substring(0, 11); 
    }  
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
    value = value.replace(/(\d{2})$/, '-$1'); 
    return value 
}  


export let formatarCNPJ = (input) => {  
    let value = input.replace(/\D/g, ''); 
    if (value.length > 14) {  
        value = value.substring(0, 14); 
    }  
    value = value.replace(/^(\d{2})(\d)/, '$1.$2'); 
    value = value.replace(/^(\d{2})\.(\d{3})(\d{1})/, '$1.$2/$3'); 
    value = value.replace(/(\d{4})(\d)/, '$1-$2'); 
    return value
}  