
const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];


  // [32, 57, 22]
  // Task 1
  // Print the name list - As an array
  // Expected Output
  // ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
  //  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]

  // map method
  // let res = scores.map((n) => n.name)
  // console.log(res)

  // destructuring method
  // let res = scores.map(({name}) => name)
  // console.log(res)






  
  // Task 2
  // >=40 pass.. find those student that passed (Use array method)
  // Expected Output
  // [{
  //     marks: 57,
  //     name: "Lillian Ellis"
  //   },
  //     {
  //     marks: 91,
  //     name: "Debra Beard"
  //   },
  //   {
  //     marks: 75,
  //     name: "Nettie Hancock"
  //   }]

  // filter method
  // let res = scores.filter((n) => n.marks>=40)
  // console.log(res)

  // destructuring method
  // let res = scores.filter(({marks, name}) => marks>=40)
  // console.log(res)







  // Task 3
  //  Find all the names who failed the exams (Array methods)
  // Expected Output
  //   ["Yvette Merritt",
  //   "Mccall Carter",
  //   "Pate Collier",
  //   "Hatfield Hodge"
  // ];

  // filter & map method combo
  // let res = scores.filter((n) => n.marks<40).map((n) => n.name)
  // console.log(res)



  
  // Task 4
  // Find the Average marks

  // let res=scores.map((n) => n.marks).reduce((sum,current) => (sum+current))
  // console.log(res/scores.length)






  // Task 5
  // Find the topper's name
  // Expected Output
  // "Debra Beard"

  // let res = scores.reduce((first, second) => first.marks > second.marks ? first : second);
  // console.log(res.name)






  
  // Only use
  // map, reduce, filter & destructuring