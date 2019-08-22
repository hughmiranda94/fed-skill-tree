import { Component, OnInit, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss']
})
export class DropdownSelectComponent implements OnInit, OnChanges {
  
  @Input() type
  @Input() list
  @Input() changeText
  @Input() id
  @Input() label
  @Input() tagsList
  
  @Input() title
  @Output() titleChange = new EventEmitter()
  
  @Input() classDrop
  @Input() selected
  @Input() disabledDrop
  
  @Output() itemDrop:EventEmitter<Object> = new EventEmitter();
  
  show;
  titleList
  editList
  classInput = ''
  
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges) {
    if(!this.disabledDrop)
      this.classInput = this.classInput.replace(/(drop-desabled)$/g,'')
    else
      this.classInput = `${this.classInput} drop-desabled`

      this.title = (this.selected === '')? '' : this.title
      
      this.show = (this.selected === '')? false : this.show

  }

  ngOnInit() {
    this.setModel()
  }
  
  setModel() {
    if(!this.tagsList)
      this.tagsList = []
    
    if(this.selected)
      this.defaultData()
  
    this.editList = this.list.slice()
  
    this.title = (!this.changeText)? this.title : this.titleList; 
    
    this.classInput = this.classDrop? `input-${this.classDrop} drop-btn-text` : 'input drop-btn-text'

    this.classInput = this.disabledDrop? `${this.classInput} drop-desabled` : this.classInput
    
    this.classDrop = this.classDrop? `dropdown-${this.classDrop}` : 'dropdown'
    
    this.classDrop = this.type? `${this.classDrop} ${this.type}` : this.classDrop
    
    this.show = false
  }


  defaultData() {
    if(Array.isArray(this.selected)) {
      this.tagsList = this.selected
    }
    else {
      this.titleList = this.list.find(l=>l.value === this.selected)
      this.titleList = this.titleList.text
    }
  }

  selectItem(item) {
    if(this.type === 'tag') 
      this.addTag(item.text)
    else {
      if(this.changeText)
        this.title = item.text

      if(!this.changeText && this.type !== 'navbar') {
        this.title = this.title.replace(/[(](.*)[)]$/g,'')
    
        if(item.text !== 'All')
          this.title = (!this.changeText)? `${this.title} (${item.text})` : item.text;
      }

      if(this.itemDrop)
        this.itemDrop.emit(item);
      
      this.titleChange.emit(this.title)
    }

    this.showDown()
  }

  showDown() {
    this.show = !this.show
  }

  keypres(item) {
    if(item.code === 'Enter' && this.type === 'tag') {
      if(this.title)
        this.addTag(this.title)
      
      this.showDown()
    }
  }

  addTag(item) {

    let notRepeat = !!this.tagsList.find(element => element === item)

    if(!notRepeat) {
      notRepeat = !!this.editList.find(element => element.text === item)
      
      if(notRepeat) {
        let pos

        for (let i = 0; i < this.editList.length; i++) {
          if(this.editList[i].text === item) {
            pos = i;
            break;
          }
        }

        this.editList.splice(pos, 1)
      } 

      this.tagsList.push(item)
  
    }
    
    if(this.itemDrop)
      this.itemDrop.emit(this.tagsList);
  }

  filterDrop(item, clickInput) {
    if(this.title === '')
      if(this.itemDrop)
        this.itemDrop.emit({empty: true});

    if(!this.disabledDrop) {
      this.editList = this.list.slice()
        
      this.editList = this.editList.filter(element => {
        let findTag = !!this.tagsList.find(item => item === element.text)
  
        if (findTag)
          return false
  
        return !!(element.text.toUpperCase().indexOf(item.toUpperCase()) > -1)
      });
        
      this.show = clickInput? !this.show : true
    }
  }

}
