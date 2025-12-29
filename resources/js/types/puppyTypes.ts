type User = {
  id: number;
};

export type Puppy = {
  id: number;
  name: string;
  trait: string;
  image_url: string;
  likedBy?: User["id"][];
  user: { id :string; name: string }
};
