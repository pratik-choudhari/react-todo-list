import { MdDone } from "react-icons/md";
import { FaTrash } from "react-icons/fa";


export default function ListTasks(props) {
  return (
    <div className="container mt-5">
      <ul className="list-group align-items-center">
        {props.tasksList.map((element) => {
          return (
            <li className="list-group-item w-50">
              <div className="row justify-content-around">
                <div className="col-9">
                {element.strike ?<p className="vertical-center"><del>{element.text}</del></p> : <p className="vertical-center">{element.text}</p>}
                </div>
                <div className="col-3 px-0">
                <button
                  className="btn btn-success"
                  style={{ height: "fit-content", marginRight: "10px"}}
                  value={element.id}
                  onClick={(e) => props.strikeTaskCallback(element.id)}
                >
                  <MdDone />
                </button>
                <button
                  className="btn btn-danger"
                  style={{ height: "fit-content" }}
                  value={element.id}
                  onClick={(e) => props.removeTaskCallback(element.id)}
                >
                  <FaTrash />
                </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
