import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnInit, Output, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StateService } from "../service/state.servce";

@Component({
    selector: 'app-toggle-btn',
    standalone: true,
    templateUrl: './toggle-btn.component.html',
    styleUrl: './toggle-btn.component.scss',
    imports: [FormsModule]
})

export class ToggleBtnComponent implements OnInit {

    _theme: StateService = inject(StateService);

    ngOnInit(): void { }

    toggleTheme() {
        this._theme.updateTheme()
    }

}