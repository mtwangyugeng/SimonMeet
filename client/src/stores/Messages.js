import { writable } from "svelte/store";

export const message = writable({type: "none", message:"a message"})