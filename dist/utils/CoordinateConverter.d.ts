export declare class CoordinateConverter {
    static dmsToDD(degrees: number, minutes: number, seconds: number): number;
    static ddToDMS(decimalDegrees: number): {
        degrees: number;
        minutes: number;
        seconds: number;
    };
    static dmmToDD(degrees: number, decimalMinutes: number): number;
    static ddToDMM(decimalDegrees: number): {
        degrees: number;
        decimalMinutes: number;
    };
    static formatDMS(degrees: number, minutes: number, seconds: number): string;
    static formatDMM(degrees: number, decimalMinutes: number): string;
    static formatDD(decimalDegrees: number): string;
}
