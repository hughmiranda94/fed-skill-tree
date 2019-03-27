import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkillsDataService } from '../skills-data.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-leaf-detail',
  templateUrl: './leaf-detail.component.html',
  styleUrls: ['./leaf-detail.component.scss']
})
export class LeafDetailComponent implements OnInit {

  skillId;
  leafInfo;
  userProficiencyLevel;

  constructor(private route: ActivatedRoute, private skillsData : SkillsDataService, private userData : UserDataService) { }

  ngOnInit() {
    // console.log(this.route.snapshot.paramMap.get('id'));
    this.skillId = this.route.snapshot.paramMap.get('id');
    this.leafInfo = this.skillsData.getSpecificSkill(this.skillId);
    this.userProficiencyLevel = this.userData.getProficiencyLevel(this.leafInfo.id);
  }

  setProficiencyLevelOnLeaf(e) {
    this.userData.setProficiencyLevel(this.skillId,e);
    this.userProficiencyLevel = this.userData.getProficiencyLevel(this.leafInfo.id);
  }

}
