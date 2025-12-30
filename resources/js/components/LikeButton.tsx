import { like } from '@/routes/puppies';
import { Puppy, SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import clsx from 'clsx';
import { Heart, LoaderCircle } from 'lucide-react';

export function LikeButton({ puppy }: { puppy: Puppy }) {
    const { auth } = usePage<SharedData>().props;
    const isLiked = auth.user ? puppy.likedBy.includes(auth.user.id) : false;

    return (
        <Link
            preserveScroll
            method="patch"
            href={like.url(puppy.id)}
            className={clsx('group', !auth.user && 'cursor-not-allowed')}
            disabled={!auth.user}
        >
            <LoaderCircle className="hidden animate-spin stroke-slate-300 group-data-loading:block" />

            <Heart
                className={clsx(
                    'group-data-loading:hidden',
                    isLiked
                        ? 'fill-pink-500 stroke-none'
                        : 'stroke-slate-200 group-hover:stroke-slate-300',
                )}
            />
        </Link>
    );
}
