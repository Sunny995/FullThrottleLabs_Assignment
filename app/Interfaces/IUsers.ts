export interface IUsers {
    id: string;
    real_name:string;
    tz:string;
    activity_periods:Array<IUsersActivity>;
}
export interface IUsersActivity {
    day: Date;
    start_time:string;
    end_time:string;
}