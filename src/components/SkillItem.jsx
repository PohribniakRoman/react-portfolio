export default function SkillItem({skill,precent}){
    return(
        <li className="main__skills--item" style={{"--precent":`${precent}px`}}>{skill}</li>
    )
}