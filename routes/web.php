<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegistryCardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::get('/home', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');

Route::get('/item-types', function () {
    return response()->json(App\Enums\ItemType::getValues());
});

Route::middleware(['auth', 'can:create-registry-item'])->group(function () {
    Route::post('/addregistryitem', [RegistryCardController::class, 'store'])->name('registry.store');
});

Route::middleware('auth')->group(function () {
    Route::get('/registry', [RegistryCardController::class, 'index'])->name('registry.index');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
