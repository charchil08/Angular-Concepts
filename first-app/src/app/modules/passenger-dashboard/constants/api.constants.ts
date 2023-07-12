import { environment } from "src/environments/environment.development";


export class ApiConstants {
    public static readonly PASSENGER_API: string = `${environment.serverUrl}/passengers`;
}