
// another way of cardWrapper 
export function CardWrapper2({children}) {
  return (
    <div style={{
      "border": "2px solid black",
      "borderRadius": "8px",
      "height": "200px",
      "width": "200px",
      "alignContent": "center",
      "paddingLeft": "40px"
    }}>
      {children}
    </div>
  )
};