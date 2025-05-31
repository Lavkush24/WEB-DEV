export function RenderTodos({id,title, description,completed}) {
    return (
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <button onClick={() => {
          fetch("http://localhost:8080/completed", {
            method: "PUT",
            body: JSON.stringify({
              id: id
            }),
            headers: {
              "Content-type": "application/json"
            }
          }).then( async (res) => {
            const todo = await res.json();
          });
        }}>{completed == true ? "Completed": "Mark as completed"}</button>
      </div>
    )
  };