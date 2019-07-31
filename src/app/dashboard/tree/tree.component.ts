import { Component, OnInit } from '@angular/core';
import { SkillsDataService } from '../../skills-data.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  data;
  currentInfo;

  constructor(private skills : SkillsDataService) { }

  ngOnInit() {
    this.data = this.skills.getSkills();
    console.log(this.data);
  }

  onEmission(e){
    this.data.branches.forEach(branch =>{
      let clickedLeaf = branch.leaves.find(leaf =>{
        return leaf.id === e
      });
      if (clickedLeaf) {
        clickedLeaf.completed = !clickedLeaf.completed;
        this.currentInfo = clickedLeaf.description;
      }
    })
  }
}
