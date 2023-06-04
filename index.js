const tod1=React.createElement('h1',{},"hello")
const tod2=React.createElement('h1',null,' satyam')
const child1=React.createElement('div',{id:'child1'},tod1,tod2)
const child2=React.createElement('div',{id:'child2'},tod1,tod2)
const heading =React.createElement("div",{id:"parent"},child1,child2)

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)