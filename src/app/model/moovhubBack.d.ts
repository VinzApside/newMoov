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
    find(
        predicate: (value: freeplaceParkResponse, index: number, obj: Array<freeplaceParkResponse>) => boolean,
        thisArg?: any
    ): freeplaceParkResponse | undefined;
}

export interface parksDataResponse {
    id_park: string;
    id_park_source: string;
    name: string;
    status: string;
    charging_point?: boolean;
    pmr?: boolean;
    polygon?: [{}];
    unavailabilities?: [{}];
    id_segment?: string;
    origin?: string;
    id_park_type?: number;
    address?: string;
    latitude?: number;
    longitude?: number;
    description?: string;
    indoor?: boolean;
    max_height?: number;
    capacityMax?: number;
    underground?: boolean;
    video_surveillance?: boolean;
    main_photo?: string;
    valet?: boolean;
    guarded?: boolean;
    pedestrian_friendly?: boolean;
    lighted?: boolean;
    photo_urls?: string[];
    showDescription?: boolean;
}

export interface UserCreate {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    optins?: {};
}
