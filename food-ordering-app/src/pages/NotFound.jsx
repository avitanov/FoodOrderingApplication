import Layout from "../components/UI/Layout"
import NotFoundSvg from '../assets/notFound.svg';
import {Link} from 'react-router-dom';
const NotFound = () =>{
    return (
      <Layout change={true} value={true}>
        <div className="flex flex-col md:flex-row bg-gray-200 md:bg-white overflow-visible h-fit">
          <div className="w-full md:w-3/4 py-6 h-fit flex flex-col items-end relative z-30">
            <div className=" w-[80%] mx-auto rounded-md pt-4 pb-7 shadow-2xl md:shadow-none md:p-0 md:rounded-none md:m-0  bg-white">
              <h1 className="font-semibold text-[3.7rem] w-[16rem] mx-auto md:m-0  text-[#292929]">
                WHOOPS, that Page is Gone.
              </h1>

              <p className="text-[1.1rem] font-normal w-[22rem] mt-2  mx-auto md:m-0">
                The link you clicked may be broken or the page may have been
                removed. Try to search again or go back to the{" "}
                <Link
                  to={"/"}
                  className={"font-semibold text-primary"}
                >
                  home page.
                </Link>
              </p>
            </div>
          </div>
          <div className=" w-full h-fit hidden md:block">
            <img src={NotFoundSvg} className=" md:-mt-5 lg:-mt-16 " />
          </div>
        </div>
      </Layout>
    );
}
export default NotFound;