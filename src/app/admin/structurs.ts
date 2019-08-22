export interface Technology {
    id: String,
    parentId: String,
    name: String,
    tags: [],
    description: String,
    evaluationType: String,
    type: 'technologies'
}

export interface Topic {
    id: String,
    technologyId: String,
    name: String,
    description: String,
    tags: [],
    type: 'topics'
}

export interface Reference {
    id: String,
    topicId: String,
    name: String,
    class: String,
    tags: [],
    url: String,
    description: String,
    subscriptionNeeded: Boolean,
    type: 'references'
}

export interface TypeData {
    type: String
}