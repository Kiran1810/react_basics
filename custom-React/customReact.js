// function to inject the content in the div element
function customRender(reactElement,container){
/*const domElement=  document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
domElement.setAttribute("href",reactElement.props.href),
domElement.setAttribute("target",reactElement.props.target)
}

container.appendChild(domElement)

*/

// other way to inject the content inside the div

const domElement= document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
for (const prop in reactElement.props) {
     if(prop==='children') continue;
     domElement.setAttribute(prop,reactElement.props[prop])
        
    }
    container.appendChild(domElement)
}


// to grab the root we will use
const reactElement ={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children: 'click here to go on google '
}
const mainContainer = document.querySelector("root")


 customRender(reactElement,mainContainer)