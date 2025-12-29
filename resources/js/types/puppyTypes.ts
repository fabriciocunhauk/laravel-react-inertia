export interface PuppiesListTypes {
    id: number;
    name: string;
    trait: string;
    image_url: string;
    user: {
        id: string;
        name: string
    };
}
