import type { PuppiesListTypes } from '@/types/puppyTypes';

function PuppiesList({ puppiesList }: { puppiesList: PuppiesListTypes[] }) {
    return (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {puppiesList.map((puppy) => (
                <PuppyCard key={puppy.id} puppy={puppy} />
            ))}
        </ul>
    );
}

export default PuppiesList;

function PuppyCard({ puppy }: { puppy: PuppiesListTypes }) {
    return (
        <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
            <img
                className="aspect-square object-cover"
                alt={puppy.name}
                src={puppy.image_url}
            />
            <div className="gap flex items-center justify-between p-4 text-sm">
                <div className="flex items-center gap-2">
                    <p className="font-semibold">{puppy.name}</p>
                    <p className="text-slate-500">{puppy.trait}</p>
                    <p className="text-slate-500">
                        Owned By: {puppy.user.name}
                    </p>
                </div>
                {/* <LikeButton
          puppyId={puppy.id}
          isLiked={isLiked}
          setIsLiked={setIsLiked}
        /> */}
            </div>
        </li>
    );
}
