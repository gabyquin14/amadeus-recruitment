<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import { ref, computed, reactive } from "vue";
import IncidenceStatusLists from "@/Components/Amadeus/Incidence/IncidenceStatusLists.vue";
import IncidenceModal from "@/Components/Amadeus/Incidence/IncidenceModal.vue";

// Interfaces
export interface IncidentInterface {
    date: Date;
    description: string;
    group: string;
    id: number;
    priority: "low" | "mid" | "high";
    status: "planned" | "in_progress" | "done";
    title: string;
}

// Variables and props
const showModal = ref(false);
const selectedIncidence = ref(null);
const props = defineProps({
    customroute: {
        type: String,
        default: () => "utility.incidence.show",
    },
    incidences: Array as () => Array<IncidentInterface>,
});

const handleIncidenceSelected = (incidence: IncidentInterface) => {
    selectedIncidence.value = incidence;
    showModal.value = true;
};

console.log(props.incidences);
</script>

<template>
    <Head title="Útiles" />

    <AuthenticatedLayout :croute="customroute">
        <div class="incidence-page mx-auto">
            <h2><strong>Problemas técnicos</strong></h2>
            <h3>Kanban interno</h3>
            <IncidenceStatusLists
                :incidences="incidences"
                @incidence-selected="handleIncidenceSelected"
            />
            <div>
                <a
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    :href="route('utility.incidence.create')"
                >
                    <i class="modal-btn fa-solid fa-circle-plus"></i>
                </a>
            </div>
        </div>
        <IncidenceModal
            :showModal="showModal"
            @close="showModal = false"
            :selectedIncidence="selectedIncidence"
        />
    </AuthenticatedLayout>
</template>

<style scoped>
.incidence-page {
    color: #2b5db6;
}
.modal-btn {
    border-radius: 100%;
    bottom: 3rem;
    right: 5rem;
    width: 4rem;
    height: 4rem;
    display: flex;
    background-color: white;
    font-size: 4rem;
    position: fixed;
    transform: scale(1);
    transition: transform ease-in-out 0.15s;
}
</style>
