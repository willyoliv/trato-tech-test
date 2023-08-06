import buscarReducer, { mudarBusca, resetarBusca } from './busca';

describe('Testando busca reducer', () => {
  test('Deve mudar busca como esperado', () => {
    expect(buscarReducer('', mudarBusca('teste'))).toEqual('teste');
  });

  test('Deve resetar busca como esperado', () => {
    expect(buscarReducer('outro valor', resetarBusca())).toEqual('');
  });
});
