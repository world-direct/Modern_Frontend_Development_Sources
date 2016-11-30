import { logger } from './logger';
export module domWriter {

    export function write(selector: string, input: string): void {
        logger.log("Write " + input + " to inner html of selector " + selector);
        var nameSpan = document.getElementById(selector);
        nameSpan.innerHTML = input;
    }
}
