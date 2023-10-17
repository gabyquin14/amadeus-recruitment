<?php

use App\Http\Controllers\Utility\IncidenceController;
use Illuminate\Support\Facades\Route;

Route::prefix('utility/incidences')->middleware(['auth'])->group(function () {

    Route::get('/', [IncidenceController::class, 'show'])->name('utility.incidence.show');
    Route::get('/create', [IncidenceController::class, 'create'])->name('utility.incidence.create');
});
