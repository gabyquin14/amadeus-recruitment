<script setup lang="ts">
import { computed, reactive, defineEmits } from "vue";
import IncidenceCard from "./IncidenceCard.vue";
import Draggable from "vuedraggable";

export interface IncidentInterface {
    date: Date;
    description: string;
    group: string;
    id: number;
    priority: "low" | "mid" | "high";
    status: "planned" | "in_progress" | "done";
    title: string;
}
const props = defineProps({
    incidences: {
        type: Array as () => Array<IncidentInterface>,
    },
});

// Functions and Computed properties
const plannedStatus = reactive(
    props.incidences.filter((incident) => incident.status === "planned")
);
const inProgressStatus = reactive(
    props.incidences.filter((incident) => incident.status === "in_progress")
);
const doneStatus = reactive(
    props.incidences.filter((incident) => incident.status === "done")
);
const emit = defineEmits(["incidence-selected"]);
const selectIncidence = (element: IncidentInterface) => {
    emit("incidence-selected", element);
};
</script>
<template>
    <div class="d-flex flex-row gap-10 mt-4">
        <div>
            <h4>| Sin iniciar</h4>
            <Draggable
                v-model="plannedStatus"
                group="incidencies"
                item-key="id"
                class="d-flex flex-column p-0 gap-6"
                tag="ul"
            >
                <template #item="{ element }">
                    <ul @click="selectIncidence(element)">
                        <IncidenceCard :incidence="element" />
                    </ul>
                </template>
            </Draggable>
        </div>

        <div>
            <h4>| En progreso</h4>
            <Draggable
                v-model="inProgressStatus"
                group="incidencies"
                itemKey="id"
                class="d-flex flex-column p-0 gap-6"
                tag="ul"
            >
                <template #item="{ element }" class="d-flex flex-column">
                    <ul @click="selectIncidence(element)">
                        <IncidenceCard :incidence="element" />
                    </ul>
                </template>
            </Draggable>
        </div>
        <div>
            <h4>| Finalizada</h4>
            <Draggable
                v-model="doneStatus"
                group="incidencies"
                itemKey="id"
                class="d-flex flex-column p-0 gap-6"
            >
                <template #item="{ element }" class="d-flex flex-column">
                    <ul @click="selectIncidence(element)">
                        <IncidenceCard :incidence="element" />
                    </ul>
                </template>
            </Draggable>
        </div>
    </div>
</template>
