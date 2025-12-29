<?php

namespace Database\Seeders;

use App\Models\Puppy;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PuppySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $puppies = [
            ['name' => 'Bella', 'trait' => 'Always Happy', 'image' => '10.jpg'],
            ['name' => 'Rex', 'trait' => 'b Happy', 'image' => '10.jpg'],
            ['name' => 'Luna', 'trait' => 'c Happy', 'image' => '10.jpg'],
            ['name' => 'Yoko', 'trait' => 'd Happy', 'image' => '10.jpg'],
            ['name' => 'Pupi', 'trait' => 'e Happy', 'image' => '10.jpg'],
            ['name' => 'Leia', 'trait' => 'f Happy', 'image' => '10.jpg'],
        ];

        $fabricio = User::first();

        foreach ($puppies as $puppy) {
            Puppy::create([
                'user_id' => $fabricio->id,
                'name' => $puppy['name'],
                'trait' => $puppy['trait'],
                'image_url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpvRRub-ODLG5AAHLD4g1Hyx1X1RAbvUPuBpdM1whwQqdOOQiZzfSvuDtGrRgADTc-HMNwlumHxyAG4GFg7IKcs25oU0D2Qm9lWmwBpz0&s=10',
            ]);
        }
    }
}