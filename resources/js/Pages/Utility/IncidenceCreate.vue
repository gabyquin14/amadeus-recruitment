<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import BaseIncidentForm from "@/Components/Amadeus/Incidence/BaseIncidentForm.vue";
import { Head } from "@inertiajs/vue3";
import { ref, computed, defineProps } from "vue";

const props = defineProps({
    customroute: {
        type: String,
        default: () => "utility.incidence.create",
    },
});
</script>

<template>
    <Head title="Útiles" />

    <AuthenticatedLayout :croute="customroute">
        <div class="mx-auto">
            <h2
                class="text-primary font-bold"
                style="font-size: 24px !important"
            >
                ¿Tienes problemas técnicos?
            </h2>
            <h3
                class="text-primary font-weight-light"
                style="font-size: 18px !important"
            >
                Contacta con nosotros
            </h3>

            <BaseIncidentForm>
                <template v-slot:header>
                    <h3 class="custom-header">Cuéntanos sobre tu incidente</h3>
                </template>

                <template v-slot:dropdowns>
                    <div class="d-flex justify-between gap-3 w-full">
                        <div class="w-full">
                            <h5 class="font-16">Prioridad</h5>

                            <select class="select-option font-16">
                                <option selected>Baja</option>
                                <option value="1">Media</option>
                                <option value="2">Alta</option>
                            </select>
                        </div>
                        <div class="w-full">
                            <h5 class="font-16">Dónde se situa el incidente</h5>
                            <select class="select-option font-16">
                                <option selected>Sección grupos</option>
                                <option value="1">
                                    Sección Inventario/option>
                                </option>
                                <option value="2">Sección Calendario</option>
                            </select>
                        </div>
                    </div>
                </template>
                <template v-slot:footer>
                    <button class="button">Crear</button>
                </template>
            </BaseIncidentForm>
        </div>
    </AuthenticatedLayout>
</template>
<style scoped>
.select-option {
    border-radius: 3rem;
    border-color: #2b5db6;
    color: #2b5db6;
    font-size: 1.2rem;
    text-align: left;
    padding: 0.5rem 2rem;
    /* Estilos adicionales si es necesario */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
.font-16 {
    font-size: 16px !important;
}
</style>
