import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  dropdownArray(list, value) {
    if(Array.isArray(value)) {
      for (let i = 0; i < list.length; i++) {
        list[i] = {
          text: list[i],
          value: value[i]
        }      
      }
    }
    else
      list = list.map(item => {
        return {
          text: item,
          value: value
        }
      })
    
    return list
  }

  dropdownObjectToArray(objList, keyText, keyValue) {
    return objList.map(item => {
      return {
        text: item[keyText],
        value: item[keyValue]
      }
    })
  }

  setTable(header, body, headerKey, itemsTable) {
    let table = {
      header: new Array(header.length),
      body: []
    }
    let elementsHeader = itemsTable.filter(item=>item.header);
    let elementsBody = itemsTable.filter(item=>!item.header);

    for (let i = 0; i < header.length; i++) {
      let items = elementsHeader.filter(item=>item.column === i)
      let element = {}

      element = this.setElementTable(items, header[i], -1)

      table.header[i] = element
    }

    table.body = body.map(bodyElement => {
      let rowBody = new Array(header.length)
      let i = 0
      
      rowBody = headerKey.map(keyElement => {
        let element = {}

        let items = elementsBody.filter(item=>item.column === i && bodyElement.id === item.id)
        
        let text = (!bodyElement[keyElement])? keyElement : bodyElement[keyElement]
        
        element = this.setElementTable(items, text, bodyElement.id)
                
        i++  
        
        return element
      });

      return rowBody

    });
    return table
  }
  
  setFilterTopic(body, key) {
    let list = []  
    
    body.forEach(headerElement => {
      if(headerElement[key])
        list = list.concat(headerElement[key])
    })

    list.sort((a, b) => {
      return (a.localeCompare(b))
    })

    list = Array.from(new Set(list))

    return list
  }

  setFilterType(body, key) {
    let list = []  
    
    list = body.map(headerElement => {
      if(headerElement[key])
        return headerElement[key]
    }).sort((a, b) => {
      return (a.localeCompare(b))
    })

    list = Array.from(new Set(list))

    return list    
  }

  setElementTable(items, text, id) {
    let data = {}
    let notText = null
    data['elements'] = []

    if(items.length > 0){
      data['elements'] = items.map(it => {

        if(notText == null && it.notText == true)
          notText =  true 

          return it
      })
    }

    data['id'] = id
    data['text'] = text
    data['notText'] = notText

    return Object.assign({}, data)
  }

  setValueElementTable(body, elements) {
    let data = []

    let elementsBody = elements.filter(item=>!item.header);    
    let elementsHeader = elements.filter(item=>item.header);    

    body.forEach(element => {

      elementsBody.forEach(item => {
        let dataElement = {}

        dataElement = item
        if(item.headerKey !== 'id')
          dataElement['id'] = element['id']

        dataElement[item.headerKey] = element[item.headerKey]
        
        if(item.type === 'linkButton')
          dataElement['url'] = `${item.link}${dataElement[item.headerKey]}`

        data.push(Object.assign({}, dataElement))
      })
    })

    data = data.concat(elementsHeader)
    
    return data
  }

  filterTable(body, key, itemsTable) {
    
    itemsTable = itemsTable.map(item => {  
      if(item.type.indexOf('filter') > -1) {

        if(item.type === 'filterText') 
        item.list = this.setFilterType(body, key[item.column])
        
        if(item.type === 'filterTopic')
          item.list = this.setFilterTopic(body, key[item.column])
        
        item.list.push('All')
        
        item.list = this.dropdownArray(item.list, item.column)        
      }

      return item
    })

    return itemsTable
  }

}
