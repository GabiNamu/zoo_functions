const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Para o argumento count deve retornar o número inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  test('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
});
