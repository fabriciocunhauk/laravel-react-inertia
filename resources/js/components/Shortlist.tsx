import { like } from '@/routes/puppies';
import { useForm, usePage } from '@inertiajs/react';
import { Heart, LoaderCircle, X } from 'lucide-react';
import { Puppy, SharedData } from '../types';

export function Shortlist({ puppies }: { puppies: Puppy[] }) {
    const { auth } = usePage<SharedData>().props;

    return (
        <div>
            <h2 className="flex items-center gap-2 font-medium">
                <span>Your shortlist</span>
                <Heart className="fill-pink-500 stroke-pink-500" />
            </h2>
            <ul className="mt-4 flex flex-wrap gap-4">
                {puppies
                    .filter((pup) => pup.likedBy.includes(auth.user?.id))
                    .map((puppy) => (
                        <li
                            key={puppy.id}
                            className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0"
                        >
                            <img
                                height={32}
                                width={32}
                                alt={puppy.name}
                                className="aspect-square w-8 object-cover"
                                src={puppy.image_url}
                            />
                            <p className="px-3 text-sm text-slate-800">
                                {puppy.name}
                            </p>
                            <DeleteButton id={puppy.id} />
                        </li>
                    ))}
            </ul>
        </div>
    );
}

// different way to send request using a form
function DeleteButton({ id }: { id: Puppy['id'] }) {
    const { processing, patch } = useForm();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();

                patch(like.url(id), { preserveScroll: true });
            }}
        >
            <button
                disabled={processing}
                className="group flex h-9 border-1 border-slate-100 px-2 hover:bg-slate-100"
            >
                {processing ? (
                    <LoaderCircle className="h-full animate-spin stroke-slate-300" />
                ) : (
                    <X className="h-full stroke-slate-400 group-hover:stroke-red-400" />
                )}
            </button>
        </form>
    );
}
