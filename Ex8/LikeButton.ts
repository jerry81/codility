import { Component } from '@angular/core';

@Component({
    selector: 'like-button',
    template: `
        <button 
          (click)="like()" 
          class="like-button"
          [class.liked]="liked"
        >
            Like | <span class="likes-counter">{{initialCount}}</span>
        </button>
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
    public liked = false

    like(): void {
        if (this.liked) {
          this.initialCount--
        } else {
          this.initialCount++
        } 
        this.liked = !this.liked
    }
}

/* result 100% */