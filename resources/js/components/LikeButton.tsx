import { Puppy } from '@/types/puppyTypes';
import { Heart } from 'lucide-react';

function LikeButton({ puppy }: { puppy: Puppy }) {
    return (
        <div className="flex items-center gap-1">
            <button className="group">
                <Heart
                    className={
                        puppy.likedBy.length > 0
                            ? 'fill-pink-500 stroke-pink-500'
                            : 'stroke-slate-400 group-hover:stroke-slate-600'
                    }
                    size={20}
                />
            </button>
        </div>
    );
}

export default LikeButton;
