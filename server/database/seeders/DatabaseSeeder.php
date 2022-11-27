<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'tran hau',
            'email' => 'hau123@gmail.com',
            'password' => Hash::make('Password'),
            'avt'=>'https://res.cloudinary.com/dy9g317c9/image/upload/v1668783258/document_web/img/avatar/author_xfn2aa.jpg',
            'isAdmin'=> 1,
        ]);
    }
}
