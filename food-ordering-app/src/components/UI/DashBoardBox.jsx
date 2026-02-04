const DashboardBox = (props) =>{
    return (
      <div className="rounded-md block mt-5 py-4 sm:px-8 px-2 w-[95%] bg-white shadow-md mx-auto">
        {props.children}
      </div>
    );

}

export default DashboardBox;