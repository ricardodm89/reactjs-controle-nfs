
export default function onBlurCep(ev, setFieldValue) {
  const { value } = ev.target;

  const cep = value?.replace(/[^0-9]/g, '');
  if (cep?.length !== 8) {
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setFieldValue('city', data.localidade);
      setFieldValue('uf', data.uf);
      setFieldValue('neighborhood', data.bairro);
      setFieldValue('street', data.logradouro);
    });
}