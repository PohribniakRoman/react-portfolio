import bg1 from "../images/img1.png";
import bg2 from "../images/img2.png";
import bg3 from "../images/img3.png";
import bg4 from "../images/img4.png";

export default function WorkItem({ links, id }) {
  return (
    <li
      className="main__works--item"
      style={{
        backgroundImage: `url(${
          id === 1 ? bg1 : id === 2 ? bg2 : id === 3 ? bg3 : id === 4 ? bg4 : ""
        })`,
      }}
    >
      <a rel="noreferrer" target="_blank" href={links[0]}>
        GitHub
      </a>
      <a rel="noreferrer" target="_blank" href={links[1]}>
        WebPage
      </a>
    </li>
  );
}
