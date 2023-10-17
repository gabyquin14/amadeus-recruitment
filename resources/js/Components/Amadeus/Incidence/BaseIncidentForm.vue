<script setup lang="ts">
import { ref } from "vue";

const input = ref("");
</script>

<template>
    <form class="create-incidence">
        <slot name="header"></slot>

        <div class="d-flex justify-between gap-3 w-full">
            <!-- Empty Dropdowns Slot -->
            <slot name="dropdowns"></slot>
        </div>
        <div>
            <h5 class="font-16">Escribe asunto</h5>
            <div class="mb-3">
                <input
                    v-model="input"
                    type="text"
                    class="input-text text-importance pl-4 font-16"
                    required
                    placeholder="Ingrese datos"
                />
            </div>
        </div>
        <div>
            <h5 class="font-16">Describe el problema</h5>
            <div class="mb-3">
                <textarea
                    v-model="input"
                    type="text"
                    class="input-text text-area text-importance pl-4 font-16"
                    required
                    placeholder="Detalle su incidente"
                ></textarea>
            </div>
        </div>
        <button class="adjuntar-btn">Adjuntar imagen</button>
        <slot name="footer"></slot>
    </form>
</template>

<style scoped>
.text-area {
    height: 156px !important;
    padding-top: 1rem;
    resize: none;
    border-radius: 30px;
}
.create-incidence {
    border-radius: 20px;
    border-bottom: 4px solid var(--_priority-color);
    background-color: #ffffff;
    padding: 30px 5rem;
    margin: 24px auto 0;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 55rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.text-importance {
    text-align: left;
}

.font-16 {
    font-size: 16px !important;
}

.adjuntar-btn {
    width: fit-content;
    padding: 0 10px;
    border-bottom: solid 2px #2b5db6;
    color: #2b5db6;
    margin: 0 auto;
}
.button {
    margin: 20px auto 0;
    height: 3.2rem;
    background-color: #3c7ff8;
    border-radius: 2rem;
    color: #fff;
    font-weight: 600;
    font-size: 1.3rem;
    letter-spacing: -0.5px;
    width: 75%;
    transition: background-color ease-in-out 0.15s, transform ease-in-out 0.15s; /* Transición para color de fondo y transformación */
    transform: scale(1); /* Tamaño inicial sin escala adicional */
}
</style>
