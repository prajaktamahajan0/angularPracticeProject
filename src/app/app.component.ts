import { Component } from '@angular/core';
import { Ireel } from './shared/models/reelsdata';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-14-crud-example';
  
  reelsArray: Array<Ireel> = [
    {
      title: "Lorem Epsum 1",
      likeCount: 1234,
      isLike: true,
      id: 1
    },
    {
      title: "Lorem Epsum 2",
      likeCount: 4567,
      isLike: false,
      id: 2
    },
    {
      title: "Lorem Epsum 3",
      likeCount: 7890,
      isLike: true,
      id: 3
    },
    {
      title: "Lorem Epsum 4",
      likeCount: 4561,
      isLike: false,
      id: 4
    },
  ]

  onLikeStateUpdate(state: boolean, id: number) {
    console.log(state, id);

    this.reelsArray.forEach(reel => {
      if (reel.id === id) {
        reel.isLike = state
      if(state){
        reel.likeCount++
      } else{
        reel.likeCount--
      }
      }
    })
  }
}
