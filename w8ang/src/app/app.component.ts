import { Component } from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'w8ang';
  taskList = [];
  taskName="";
  taskDate="";
  taskStatus="";
  taskDesc="";
  taskCounter=0;
  completedCounter=0;
  displayList = this.taskList;
  checker= -1;

  newTask(){
    let task={name:this.taskName,date:this.taskDate,status:this.taskStatus,desc:this.taskDesc};
    this.taskList.push(task);
    this.updateCounter();
    this.displayList=this.taskList;
  }
  deleteThis(index){
    this.taskList.splice(index,1);
    this.updateCounter();
  }

  deleteCompleted(){
    for(let i=0;i<this.taskList.length;i++){
      if (this.taskList[i].status == "DONE"){
        this.taskList.splice(i,1);
        i--;
      }
    }
    this.updateCounter();
  }

  displayCompleted(){
    this.displayList=[];
    for (let i=0;i<this.taskList.length;i++ ) {
      if (this.taskList[i].status == "DONE") {
        if (this.checker<0) {
          this.displayList.push(this.taskList[i]);
        }
      }else if (this.checker>0){
        this.displayList.push(this.taskList[i]);
      }
    }
    this.checker=this.checker*-1;
  }



  updateCounter(){
    this.completedCounter=0;
    for(let i=0;i<this.taskList.length;i++){
      if (this.taskList[i].status == "DONE"){
        this.completedCounter++;
      }
    }
    this.taskCounter=this.taskList.length;

  }

}
