
export interface IAddClassToElement {
    mainClass: string;   
    conditionClass: boolean;     
    firstClass: string;  
    secondClass: string;
}

export const takeClass = ( obj : IAddClassToElement): string => {
    const { mainClass, conditionClass, firstClass, secondClass } = obj;
    return `${mainClass} ${conditionClass ? firstClass : secondClass}`;
}