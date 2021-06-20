import { MdDone } from "react-icons/md";

export default function ListTasks(props) {
  return (
    <div className="container mt-5">
      <ul className="list-group align-items-center">
        {props.tasksList.map((element) => {
          return (
            <li className="list-group-item text-left w-50">
              <div className="d-flex flex-row justify-content-between">
                <p className="align-middle">{element.text}</p>
                <button
                  className="btn btn-success"
                  style={{ height: "fit-content" }}
                  value={element.id}
                  onClick={(e) => props.removeTaskCallback(element.id)}
                >
                  <MdDone />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
