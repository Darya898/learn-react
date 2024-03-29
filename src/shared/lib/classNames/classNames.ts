type Mods=Record<string, boolean|string>
const obj:Mods={
    'hovered':true
}

export function classNames(cls:string, mods:Mods={}, additional:string[]=[]):string {
    return [cls,...additional.filter(Boolean),...Object.entries(mods).filter(([cls,value])=>Boolean(value)).map(([cls,value])=>cls)].join(' ')

}
//classNames('remove-btn',{hovered:true, selectable:true, red:true},['pdg'])