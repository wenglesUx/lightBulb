class claridade{
    constructor(horizontal,horizontalRef,lightTOP,lightBOTTOM){

        this.horizontal = horizontal
        this.horizontalRef = horizontalRef
        this.lightTOP = lightTOP
        this.lightBOTTOM = lightBOTTOM

    }
    initialize(){
        this.horizontalRef.value = this.horizontal.value;
        this.applyrule()
        this.updatevalue()
    }
    applyrule(){
        this.lightBOTTOM.style.opacity=`${horizontalRef.value}%`;
        this.lightTOP.style.opacity=`${horizontalRef.value}%`;
       
    }
    updatevalue(type,value){
        switch(type){
            case "horizontal":
            this.horizontalRef.value = value;
            break
        }
        if(horizontal.value > 60){
            document.querySelector('body').style.background ='#010716'
            document.querySelector('.container').style.boxShadow ='1px 1px 10px 1px gold'
        } else{
            document.querySelector('body').style.background =''
            document.querySelector('.container').style.boxShadow ='none'
        }
       
       
    
        this.applyrule()
    }
}
//seletores de elementos
const horizontal =document.querySelector('#horizontal');
const horizontalRef =document.querySelector('#horizontal-value');
const lightBOTTOM =document.querySelector('#light-bottom');
const lightTOP =document.querySelector('#light-top');
const btn =document.querySelector('#button');

const light = new claridade(
    horizontal,horizontalRef,lightBOTTOM,lightTOP
)


horizontal.addEventListener("input", (e)=>{
    const value = e.target.value;
    light.updatevalue('horizontal',value)
})

function lights(){
    lightBOTTOM.style.display ='none'
    lightTOP.style.display ='none'
}

btn.addEventListener('click',lights)

btn.addEventListener('dblclick',()=>{
    light.initialize()
    lightBOTTOM.style.display ='block'
    lightTOP.style.display ='block'
})