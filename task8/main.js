const ammarobject={
    name:"ahmed ali",
    age:25,
    hoppies:[1, 2, 3]
}
// لا يجوز ان نساوى اوبجكتين او اتنين ارراى ببعض مباشرة لان تلك الطريقة تعطى نفس مكان التخزين لكليهما لذا نستخدم الspreadparameter
const ahmedobject={...ammarobject, hoppies:[...ammarobject.hoppies, 4, 5]}//== const ahmedobject=object.create(ammarobject, {property or method to add: {value:  }})
console.log(ahmedobject);

/********************************************************************************* */
const study ={
    name:"machine learning",
    modules: ["lec1","lec2","lec3"],
    subjects:{
        first:["supervised learning", "neural networks"],
        second:["unsupervised learning"]
    }
}

const coursematrial={...study, modules: [...study.modules], subjects:{...study.subjects, first:[...study.subjects.first], second:[...study.subjects.second]}};
console.log(coursematrial);
//new-object-name=object.assign({},old-object-name,...)(used to add many objects' elements to new one another)