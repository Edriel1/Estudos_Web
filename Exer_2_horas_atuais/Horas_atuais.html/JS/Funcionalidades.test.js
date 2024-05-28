const { nomeMes } = require('./Funcionalidades.js');
const { addZeroLeft } = require('./Funcionalidades.js');
const { nameDayWeek } = require('./Funcionalidades.js');
//import { nomeMes, addZeroLeft, nameDayWeek } from './Funcionalidades.js';

describe("test to convertion from number to month name", () => {
    
    test('From Number 0 to String Janeiro', () =>{
        expect(nomeMes(0)).toBe('Janeiro');
    });

    test('From Number 1 to String Fevereiro', () => {
        expect(nomeMes(1)).toBe('Fevereiro');
    });

    test('From Number 2 to String Março', () =>{
        expect(nomeMes(2)).toBe('Março');
    });

    test('From Number 3 to String Abril', () => {
        expect(nomeMes(3)).toBe('Abril');
    });

    test('From Number 4 to String Maio', () => {
        expect(nomeMes(4)).toBe('Maio');
    });

    test('From Number 5 to String Junho', () => {
        expect(nomeMes(5)).toBe('Junho');
    });

    test('From Number 6 to String Julho', () => {
        expect(nomeMes(6)).toBe('Julho');
    });

    test('From Number 7 to String Agosto', () => {
        expect(nomeMes(7)).toBe('Agosto');
    });

    test('From Number 8 to String Setembro', () => {
        expect(nomeMes(8)).toBe('Setembro');
    });

    test('From Number 9 to String Outubro', () => {
        expect(nomeMes(9)).toBe('Outubro');
    });

    test('From Number 10 to String Novembro', () =>{
        expect(nomeMes(10)).toBe('Novembro');
    });

    test('From Number 11 to String Dezembro', () => {
        expect(nomeMes(11)).toBe('Dezembro');
    });

    test('From Invalide value to undefined', () => {
        expect(nomeMes(12)).toBe(undefined);     
    });

    test('From String to undefined', () => {
        expect(nomeMes('string')).toBe(undefined);
    });

    test('From Negative Number to undefined', () => {
        expect(nomeMes(-1)).toBe(undefined);
    });

    test('From null to undefined', () => {
        expect(nomeMes()).toBe(undefined);
    })
});

describe('Add 0 to left if number is < 10', () => {

    test('From 1 to 01', () => {
        expect(addZeroLeft(1)).toBe('01');
    });

    test('From 10 to 10', () => {
        expect(addZeroLeft(10)).toBe(10);
    });

    test('From -1 to -01', () => {
        expect(addZeroLeft(-1)).toBe('-01');
    });

    test('From string to undefined', () => {
        expect(addZeroLeft('string')).toBe(undefined);
    });

    test('From null to undefined', () => {
        expect(addZeroLeft()).toBe(undefined);
    });
});

describe('Convert Number to week day name', () => {
    
    test('From Number 0 to Domingo', () => {
        expect(nameDayWeek(0)).toBe('Domingo');
    });

    test('From Number 1 to Segunda', () => {
        expect(nameDayWeek(1)).toBe('Segunda');
    });

    test('From Number 2 to Terça', () => {
        expect(nameDayWeek(2)).toBe('Terça');
    });

    test('From Number 3 to Quarta', () => {
        expect(nameDayWeek(3)).toBe('Quarta');
    });

    test('From Number 4 to Quinta', () => {
        expect(nameDayWeek(4)).toBe('Quinta');
    });

    test('From Number 5 to Sexta', () => {
        expect(nameDayWeek(5)).toBe('Sexta');
    });

    test('From Number 6 to Sabado', () => {
        expect(nameDayWeek(6)).toBe('Sabado');
    });

    test('From string to unddefined', () => {
        expect(nameDayWeek('string')).toBe(undefined);
    });

    test('From null to undefined', () => {
        expect(nameDayWeek()). toBe(undefined);
    });

    test('From -1 to undefined', () => {
        expect(nameDayWeek(-1)).toBe(undefined);
    });
});