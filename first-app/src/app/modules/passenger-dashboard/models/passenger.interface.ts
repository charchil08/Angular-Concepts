export interface IChild {
    name: string;
    age: number;
}

export interface IPassenger {
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkedInDate: number | null;
    children: IChild[] | null;
}
