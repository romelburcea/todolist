import filterStuff from "./priorityFile";
import { projects } from ".";

export const highButton = document.querySelector(".highBtn");
export const medBtn = document.querySelector(".medBtn");
export const lowBtn = document.querySelector(".lowBtn");

export function addPriorityButtonListeners() {
    highButton.addEventListener("click", () => {
        filterStuff(projects, "high");
    });

    medBtn.addEventListener("click", () => {
        filterStuff(projects, "medium");
    });

    lowBtn.addEventListener("click", () => {
        filterStuff(projects, "low");
    });
}