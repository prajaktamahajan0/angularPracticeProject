import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
@Input() getLikedState !: boolean;
@Output() emitliked : EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  onLikeClick(){
    this.getLikedState = !this.getLikedState;
    this.emitliked.emit(this.getLikedState)
  }

}
