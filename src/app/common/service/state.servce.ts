import { Injectable, Signal, signal } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class StateService {
    themeSignal = signal<string>("dark");

    setTheme(theme: string) {
        this.themeSignal.set(theme)
    }

    updateTheme() {
        this.themeSignal.update(value => (value === "dark") ? "lite" : "dark");
    }
}