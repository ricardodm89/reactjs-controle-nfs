import * as yup from "yup";

const validationCustomers = yup.object({
    corporate_name: yup
        .string("Digite a razão social")
        .required("Razão Social é obrigatório."),
    name: yup
        .string("Digite o nome fantasia")
        .required("Nome Fantasia é obrigatório."),
    cnpj: yup
        .string("Digite o CNPJ")
        .required("CNPJ é obrigatório."),
    status: yup
        .string('Selecione o status')
        .required('Status é obrigatório'),
    segment: yup
        .string('Digite o Segmento')
        .required('Segmento é obrigatório'),
    cep: yup
        .string('Digite o CEP')
        .required('CEP é obrigatório'),
    street: yup
        .string('Digite o logradouro')
        .required('Logradouro é obrigatório'),
    number: yup
        .string('Digite o número')
        .required('Número é obrigatório'),
    adjunct: yup
        .string('Digite o completemento'),
    neighborhood: yup
        .string('Digite o bairro')
        .required('Bairro é obrigatório'),
    city: yup
        .string('Digite a cidade')
        .required('Cidade é obrigatória'),
    uf: yup
        .string('Selecione o estado')
        .required('Estado é obrigatório'),
    phone: yup
        .string('Digite o telefone')
        .required('Telefone é obrigatório'),
    phone_other: yup
        .string('Digite o telefone'),
    email: yup
        .string('Digite o e-mail')
        .required('E-mail é obrigatório'),
});

export default validationCustomers;