import Component, { PageEl } from "@/components/Libs/Component";
import Copy from "@/components/Libs/Copy";
import Button from "@/components/Libs/Button";
import Info from "@/components/Libs/Info";
import Router from "next/router";
import Window from "@/components/Libs/Window";
import TextBox from "@/components/Libs/TextBox";
import Icon2Titles from "@/components/Libs/Icon2Titles";
import Icon3Titles from "@/components/Libs/Icon3Titles";
import { useState } from "react";
import Head from "next/head";
// text-red-500
// text-green-500
export default (p) => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {
  let styles = global.styles;
  let name = "خوش آمدید";
  let data = props.data;
  const [prices, setPrices] = useState();
  const [coin, setCoin] = useState(null);

  function handleCoin(coinName) {
    setCoin(coinName);
  }
  function checkChange(ch) {
    let color = ch > 0 ? "text-green-500" : "text-red-500";
    return color;
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>
      <div style={{ direction: "ltr", minHeight: "11vh" }}>
        {/* <br-x />
      <Window title={name} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" }}>
      <pre style={{ direction: "ltr" }}>{JSON.stringify(props, null, 2)}</pre>
      </Window> */}

        <div className="  flex w-full h-min bg-[#35302F] rounded-xl pl-5 pr-5 font-mono ">
          <div className="flex-auto w-1/5 bg-[#E4DAC6] m-4 rounded-xl">
            <Button
              faid={`fa-solid fa-coins ${checkChange(
                props.rawData.BTC.USD.CHANGEPCT24HOUR
              )}`}
              handleCoin={handleCoin}
            >
              BTC
            </Button>
            <Button
              faid={`fa-solid fa-coins ${checkChange(
                props.rawData.ETH.USD.CHANGEPCT24HOUR
              )}`}
              handleCoin={handleCoin}
            >
              ETH
            </Button>
            <Button
              faid={`fa-solid fa-coins ${checkChange(
                props.rawData.XRP.USD.CHANGEPCT24HOUR
              )}`}
              handleCoin={handleCoin}
            >
              XRP
            </Button>
            <Button
              faid={`fa-solid fa-coins ${checkChange(
                props.rawData.SOL.USD.CHANGEPCT24HOUR
              )}`}
              handleCoin={handleCoin}
            >
              SOL
            </Button>
            <Button
              faid={`fa-solid fa-coins ${checkChange(
                props.rawData.ARB.USD.CHANGEPCT24HOUR
              )}`}
              handleCoin={handleCoin}
            >
              ARB
            </Button>
          </div>

          <div className="flex-auto w-4/5 bg-[#E4DAC6] m-4 rounded-xl ">
            <Info data={data} coin={coin} />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  var session = await global.SSRVerify(context);
  var {
    uid,
    name,
    image,
    imageprop,
    lang,
    cchar,
    unit,
    workspace,
    servid,
    servsecret,
    usedquota,
    quota,
    quotaunit,
    status,
    regdate,
    expid,
    role,
    path,
    devmod,
    userip,
  } = session;

  let res = await fetch(
    "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,SOL,ARB&tsyms=USD&relaxedValidation=true&extraParams=test&api_key=4957365860126daea1f147fa4e5a9687c0b474d20a9d5cccaf2290544c7a20b9"
  );

  let Data = await res.json();
  let rawData = Data.RAW;
  let data = Data.DISPLAY;
  console.log("pppppppppppppppppppppppppppppppppppp", data.DISPLAY);
  return {
    props: {
      data: global.QSON.stringify({
        data,
        rawData,
        session,
        // nlangs,
      }),
    },
  };
}
