import { Component, OnInit } from '@angular/core';
import { SkillCardService } from '../skill-card.service';
import { SkillsDataService } from '../skills-data.service';
import { SkillContentDialogComponent } from '../common-components/skill-content-dialog/skill-content-dialog.component'
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private skillsData: SkillsDataService
    ) { }

  technologies;
  selectedTechnology;

  headerInfo = {
    pageTitle: 'Frontend Road Map',
    username: 'José Ángel Parga Cruz',
    searchInput: true
  };

  ngOnInit() {
    this.technologies = this.skillsData.getTechnologies();
    // this.selectedTechnology = this.skillsData.getTechnologyById('01');
  }

  onSelectTechnology(technology) {
    this.selectedTechnology = technology ? this.skillsData.getTechnologyById(technology.id) : {};
  }

  openDialog() {
    // const dialogRef = this.dialog.open(SkillContentDialogComponent)

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
