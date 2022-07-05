import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";



import './BreadCrumb.css'



const BreadCrumb = () => {
  const location = useLocation();
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    return (
      <div >
        <Breadcrumb >
          {pathnames.length  > 0 ? (
            <Breadcrumb.Item>
            You Are Here {'>'} Next
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item >You Are Here {'>'} Next {'>'} TSCOBOX  {'/'} Overview</Breadcrumb.Item>
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item>{capatilize(name)}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item>
                <Link to={`${routeTo}`}>{capatilize(name)}</Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    );
  };

  return (
    <div >
        {breadCrumbView()}
    </div>
  )
};


export default BreadCrumb;