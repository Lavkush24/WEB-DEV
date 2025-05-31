export function CardWrapper({InnerComponent}) {
    return (
      <div style={{
        "border": "2px solid black",
        "borderRadius": "8px",
        "height": "200px",
        "width": "200px",
        "alignContent": "center",
        "paddingLeft": "40px"
      }}>
        <InnerComponent Text={Text} Button={Button}></InnerComponent>
      </div>
    )
  };