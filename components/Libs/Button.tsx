import Head from "next/head";
import { Children } from "react";
export default (props?: {
  faid?: string;
  children?: string;
  handleCoin?: any;
}) => {
  return (
    <>
      {" "}
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0-beta3/css/all.min.css"
        />
      </Head>
      <div className="flex  justify-center p-2">
        <button
          className="w-4/5 h-min mt-4 mb-4 bg-[#35302F] rounded-lg p-3 grid-flow-row text-[#fff] "
          onClick={() => props.handleCoin(props.children)}
        >
          <i className={props.faid + ``}></i>
          <h3 className="inline pl-4 text-lg">{props.children}</h3>
        </button>
      </div>
    </>
  );
};
