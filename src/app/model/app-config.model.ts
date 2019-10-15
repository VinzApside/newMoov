export interface IAppConfig {
  env: {
    name: string;
  };
  logging: {
    console: boolean;
  };
  api: {
    moovhubBackUrl: string;
    moovhubBookingAvailability: string;
  };
}
