import { logger } from './logger';

export module calculator {
    export function add(summand1: number, summand2: number): number {
        logger.log("Add " + summand1 + "+" + summand2);
        return summand1 + summand2;
    }

    export function multiply(factor1: number, factor2: number): number {
        logger.log("Multiply " + factor1 + "*" + factor2);

        return factor1 * factor2;
    }

    export function modulo(dividend: number, divisor: number): number {
        logger.log("Modulo " + dividend + "%" + divisor);

        return dividend % divisor;
    }

};