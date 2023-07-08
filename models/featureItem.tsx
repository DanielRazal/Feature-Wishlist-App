type FeatureItem = {
    id: number;
    title: string;
    description: string;
    votes: {
        counter:number,
        like:boolean,
        unlike:boolean
    };
}