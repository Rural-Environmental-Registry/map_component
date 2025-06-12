export class CoordinateConverter {
    /**
     * Converte coordenadas de DMS (Degrees, Minutes, Seconds) para DD (Decimal Degrees)
     * @param degrees Graus
     * @param minutes Minutos
     * @param seconds Segundos
     * @returns Valor em graus decimais
     */
    static dmsToDD(degrees: number, minutes: number, seconds: number): number {
        return degrees + (minutes / 60) + (seconds / 3600);
    }

    /**
     * Converte coordenadas de DD (Decimal Degrees) para DMS (Degrees, Minutes, Seconds)
     * @param decimalDegrees Graus decimais
     * @returns Objeto contendo graus, minutos e segundos
     */
    static ddToDMS(decimalDegrees: number): { degrees: number; minutes: number; seconds: number } {
        const degrees = Math.floor(Math.abs(decimalDegrees));
        const minutesDecimal = (Math.abs(decimalDegrees) - degrees) * 60;
        const minutes = Math.floor(minutesDecimal);
        const seconds = (minutesDecimal - minutes) * 60;

        return {
            degrees: decimalDegrees < 0 ? -degrees : degrees,
            minutes,
            seconds
        };
    }

    /**
     * Converte coordenadas de DMM (Degrees, Decimal Minutes) para DD (Decimal Degrees)
     * @param degrees Graus
     * @param decimalMinutes Minutos decimais
     * @returns Valor em graus decimais
     */
    static dmmToDD(degrees: number, decimalMinutes: number): number {
        return degrees + (decimalMinutes / 60);
    }

    /**
     * Converte coordenadas de DD (Decimal Degrees) para DMM (Degrees, Decimal Minutes)
     * @param decimalDegrees Graus decimais
     * @returns Objeto contendo graus e minutos decimais
     */
    static ddToDMM(decimalDegrees: number): { degrees: number; decimalMinutes: number } {
        const degrees = Math.floor(Math.abs(decimalDegrees));
        const decimalMinutes = (Math.abs(decimalDegrees) - degrees) * 60;

        return {
            degrees: decimalDegrees < 0 ? -degrees : degrees,
            decimalMinutes
        };
    }

    /**
     * Formata coordenadas DMS em string legível
     * @param degrees Graus
     * @param minutes Minutos
     * @param seconds Segundos
     * @returns String formatada (ex: "23° 45' 30\"")
     */
    static formatDMS(degrees: number, minutes: number, seconds: number): string {
        return `${Math.abs(degrees)}° ${minutes}' ${seconds.toFixed(2)}"`;
    }

    /**
     * Formata coordenadas DMM em string legível
     * @param degrees Graus
     * @param decimalMinutes Minutos decimais
     * @returns String formatada (ex: "23° 45.50'")
     */
    static formatDMM(degrees: number, decimalMinutes: number): string {
        return `${Math.abs(degrees)}° ${decimalMinutes.toFixed(2)}'`;
    }

    /**
     * Formata coordenadas DD em string legível
     * @param decimalDegrees Graus decimais
     * @returns String formatada (ex: "23.75833°")
     */
    static formatDD(decimalDegrees: number): string {
        return `${decimalDegrees.toFixed(5)}°`;
    }
} 