import { writable } from "svelte/store";
import { addRoute } from "./_routing";

export const tokenStore =  writable("");
addRoute("token", tokenStore)