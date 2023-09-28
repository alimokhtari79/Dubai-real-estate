import React from 'react';
import SideBar from '../Sidebar/SideBar';
import Result from './../Result/Result';

const Content = () => {
  return (
    <section className="main-container">
      <section className="sidebar">
        <SideBar />
      </section>
      <section className="result">
        <Result />
      </section>
    </section>
  );
};

export default Content;
