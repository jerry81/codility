import { Component } from '@angular/core';

@Component({
    selector: 'like-button',
    template: `
        <h2>
            Like button
        </h2>
    `,
    styles: [`
        .like-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:  #585858;
        }

        .liked {
            font-weight: bold;
            color: #1565c0;
        }
    `]
})

export class LikeButtonComponent {
    public initialCount = 100;
}
