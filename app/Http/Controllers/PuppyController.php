<?php

namespace App\Http\Controllers;

use App\Http\Resources\PuppyResource;
use App\Models\Puppy;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Fortify\Features;

class PuppyController extends Controller
{
    public function index(Request $request, Puppy $puppy)
    {
        return Inertia::render('puppies/index', [
            'canRegister' => Features::enabled(Features::registration()),
            'puppies' => PuppyResource::collection(Puppy::all()->load(['user', 'likedBy'])),
        ]);
    }

    public function like(Request $request, Puppy $puppy)
    {
        $puppy->likedBy()->toggle($request->user()->id);

        return back();
    }
}
