import { forCycle, whileCycle, doWhileCycle } from './index';

describe('Урок 5.10 - Циклы', () => {
  describe('Тест цикла for', () => {
    test('Сумма четных чисел в диапазоне от 1 до 2', () => {
      expect(forCycle(1, 2)).toBe(2);
    });

    test('Сумма четных чисел в диапазоне от 2 до 20', () => {
      expect(forCycle(2, 20)).toBe(110);
    });
  });

  describe('Тест цикла while', () => {
    test('Количество итераций деления на 2 для числа 2 (до остатка 0.1)', () => {
      expect(whileCycle(2)).toBe(5);
    });

    test('Количество итераций деления на 2 для числа 110 (до остатка 0.1)', () => {
      expect(whileCycle(110)).toBe(11);
    });
  });

  test('Тест цикла doWhileCycle, автозамена каждого третьего символа в строке "Мороз и солнце, день чудесный"', () => {
    expect(doWhileCycle("Мороз и солнце, день чудесный")).toBe("Мо_оз_и _ол_це_ д_нь_чу_ес_ый");
  });
});