export interface freeplaceParkBody {
    beginDate: string;
    endDate: string;
    id_park: string;
    latitude: number;
    longitude: number;
    vehicleTypes: string[];
}

export interface freeplaceParkResponse {
    availability: number;
    id_park: string;
    id_park_source: string;
    is_updated: number;
    origin: string;
    price: number;
}
