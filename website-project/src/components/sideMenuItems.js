import "../css/sidemenu.scss"


let SideMenuItems = (data) => {

  console.log(data)
  return (
    <div className="sidemenu-item">
      <h2>{data.name}</h2>
      <h5>{data.description}</h5>
      <h5>{data.type}</h5>
    </div>
  );
}

export default SideMenuItems;
