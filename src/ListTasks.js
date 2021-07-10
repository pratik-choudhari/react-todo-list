import { MdDone } from "react-icons/md";
import { FaTrash } from "react-icons/fa";


export default function ListTasks(props) {
  return (
    <div className="container mt-5">
      <ul className="list-group align-items-center">
        {props.tasksList.map((element) => {
          return (
            <li className="list-group-item text-left w-50">
              <div className="d-flex flex-row justify-content-between">
                {element.strike ?<p className="align-middle"><del>{element.text}</del></p> : <p className="align-middle">{element.text}</p>}
                <button
                  className="btn btn-success"
                  style={{ height: "fit-content" }}
                  value={element.id}
                  onClick={(e) => props.strikeTaskCallback(element.id)}
                >
                  <MdDone />
                </button>
                <button
                  className="btn btn-success"
                  style={{ height: "fit-content" }}
                  value={element.id}
                  onClick={(e) => props.removeTaskCallback(element.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
