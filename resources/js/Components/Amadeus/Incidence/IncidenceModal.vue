<script setup lang="ts">
import { computed, toRefs, defineEmits } from "vue";
import Modal from "@/Components/Modal.vue";
import BaseIncidentForm from "./BaseIncidentForm.vue";
import { formatSlashDate } from "@/utils/dateFormat";

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
    showModal: {
        type: Boolean,
        default: false,
    },
    selectedIncidence: {
        type: Object as () => IncidentInterface,
        default: {},
    },
});
const { showModal } = toRefs(props);
const emit = defineEmits(["close"]);
const { date, description, group, id, priority, status, title } =
    props.selectedIncidence || {};

const styles = computed(() => {
    return showModal.value
        ? "d-flex justify-content-center align-items-center"
        : "";
});
const priorityColor = computed(() => {
    return props.selectedIncidence.priority === "low"
        ? "#44A7AD"
        : props.selectedIncidence.priority === "high"
        ? "#FF5252"
        : "#F2A42E";
});
</script>
<template>
    <Modal :show="showModal" :styles="styles" @close="() => emit('close')">
        <BaseIncidentForm>
            <template v-slot:header>
                <h3 class="font-16 text-nowrap">
                    {{ selectedIncidence.title }} -
                    {{ formatSlashDate(selectedIncidence.date) }}
                </h3>
            </template>

            <template v-slot:dropdowns>
                <div class="w-full">
                    <div class="d-flex justify-between gap-3">
                        <div class="w-full flex-item">
                            <h5 class="font-16">Prioridad</h5>

                            <span
                                class="priority-tag"
                                :style="{ '--priority-color': priorityColor }"
                                >{{ selectedIncidence.priority }}</span
                            >
                        </div>
                        <div class="w-full flex-item bigger">
                            <h5 class="font-16">Dónde se situa el incidente</h5>
                            <span
                                class="priority-tag"
                                :style="{ '--priority-color': '#3c7ff8' }"
                                >{{ selectedIncidence.group }}</span
                            >
                        </div>
                        <button class="button flex-item">Acciones</button>
                    </div>
                </div>
            </template>
        </BaseIncidentForm>
    </Modal>
</template>
<style scoped>
.flex-item {
    flex: 1;
    white-space: nowrap;
}

.bigger {
    flex: 2;
}
.button {
    height: fit-content;
    background-color: #3c7ff8;
    border-radius: 2rem;
    color: #fff;
    font-weight: 600;
    font-size: 13px;
    padding: 8px 0;
    height: fit-content;
    align-self: flex-end;
}
.priority-tag {
    --_priority-color: var(--priority-color, red);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 2px solid var(--priority-color);
    color: var(--priority-color);
    border-radius: 20px;
    padding: 5px 0;
    text-transform: capitalize;
}
</style>
