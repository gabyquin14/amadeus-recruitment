<script setup lang="ts">
import { computed } from "vue";
import { formatSpanishDate } from "@/utils/dateFormat";

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
    incidence: {
        type: Object as () => IncidentInterface,
        default: null,
    },
});
const { date, description, group, priority, title } = props.incidence;

const priorityColor = computed(() => {
    return priority === "low"
        ? "#44A7AD"
        : priority === "high"
        ? "#FF5252"
        : "#F2A42E";
});
</script>
<template>
    <li
        class="incident dark:bg-gray-800 overflow-hidden transform transition-all cursor-pointer sm:mx-auto"
        :style="{ '--priority-color': priorityColor }"
    >
        <h5 class="incident-title mb-0">{{ title }}</h5>
        <p class="incident-date mb-2">
            {{ formatSpanishDate(date) }} - <strong>{{ group }}</strong>
        </p>
        <p class="incident-description mb-2">
            {{ description }}
        </p>
        <div
            class="incident-priority"
            :style="{ '--priority-color': priorityColor + '66' }"
        >
            {{ priority }}
        </div>
    </li>
</template>
<style scoped>
/* This is a local variable for changing colors. 
  It accepts the variable name and a fallback color in case it's not found 
  This takes less code than a class per priority status
  */
.incident {
    --_priority-color: var(--priority-color, red);
    color: #222038;
    font-size: 12px;
    border-radius: 20px;
    border-bottom: 4px solid var(--_priority-color);
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
    width: 296px;
    display: inline-block;
}
.incident-title {
    color: #2b5db6;
}
.incident-priority {
    --_priority-color: var(--priority-color, red);
    width: fit-content;
    padding: 4px 14px;
    border-radius: 20px;
    background-color: var(--_priority-color);
    text-transform: capitalize;
}
</style>
