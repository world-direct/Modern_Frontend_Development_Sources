import { domWriter } from './domWriter';
import { calculator } from './calculator';

module main {


    function calculate(): void {
        var addResult = calculator.add(100, 400);
        domWriter.write('add-result', addResult.toString());

        var multiplicationResult = calculator.multiply(4, 8);
        domWriter.write('multiplication-result', multiplicationResult.toString());

        var moduloResult = calculator.modulo(25, 4);
        domWriter.write('modulo-result', moduloResult.toString());
    }

    document.querySelector('#button').addEventListener("click", () => calculate());
}