export class CoordinateConverter {
    static dmsToDD(degrees: number, minutes: number, seconds: number): number {
        return degrees + (minutes / 60) + (seconds / 3600);
    }

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
    static dmmToDD(degrees: number, decimalMinutes: number): number {
        return degrees + (decimalMinutes / 60);
    }

    static ddToDMM(decimalDegrees: number): { degrees: number; decimalMinutes: number } {
        const degrees = Math.floor(Math.abs(decimalDegrees));
        const decimalMinutes = (Math.abs(decimalDegrees) - degrees) * 60;

        return {
            degrees: decimalDegrees < 0 ? -degrees : degrees,
            decimalMinutes
        };
    }

    static formatDMS(degrees: number, minutes: number, seconds: number): string {
        return `${Math.abs(degrees)}° ${minutes}' ${seconds.toFixed(2)}"`;
    }

    static formatDMM(degrees: number, decimalMinutes: number): string {
        return `${Math.abs(degrees)}° ${decimalMinutes.toFixed(2)}'`;
    }

    static formatDD(decimalDegrees: number): string {
        return `${decimalDegrees.toFixed(5)}°`;
    }
} 