function customRender(reactElement,container){
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.properties.href)
    domElement.setAttribute('target', reactElement.properties.target)

    container.appendChild(domElement)
    */


    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    for(const prop in reactElement.properties){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.properties[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    properties: {
        href: 'http://google.com',
        target: "_blank"
    },
    children: 'Click me to visit Google'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)









