export default (props?: {
  data?: object;
  children?: string;
  coin?: string;
}) => {
  console.log(props.data);
  let infoData;
  let coinName;
  if (props.coin === "BTC") {
    infoData = props.data.BTC.USD;
    coinName = "Bitcoin";
  } else if (props.coin === "ETH") {
    infoData = props.data.ETH.USD;
    coinName = "Etherium";
  } else if (props.coin === "XRP") {
    infoData = props.data.XRP.USD;
    coinName = "XRP";
  } else if (props.coin === "SOL") {
    infoData = props.data.SOL.USD;
    coinName = "Solana";
  } else if (props.coin === "ARB") {
    infoData = props.data.ARB.USD;
    coinName = "Arbitrum";
  }
  return (
    <>
      <div className="p-6 text-xl">
        {props.coin === null ? (
          <div className="text-2xl p-10">Select One!</div>
        ) : (
          <div className="">
            <div className="text-2xl">
              {" "}
              {">>>"}
              {coinName} Prices:{" "}
            </div>
            <div className="mt-3 font-semibold">Price: {infoData.PRICE}</div>
            <div className="mt-3">
              Last Hour Change: {infoData.CHANGEHOUR}{" "}
              <div className="ml-5 inline">{infoData.CHANGEPCTHOUR}%</div>
            </div>
            <div className="mt-3">Last Hour Highest: {infoData.HIGHHOUR}</div>
            <div className="mt-3">Last Hour Lowest: {infoData.LOWHOUR}</div>
            <div className="mt-3">
              Last 24H Change: {infoData.CHANGE24HOUR}{" "}
              <div className="ml-5 inline">{infoData.CHANGEPCT24HOUR}%</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// infoData.PRICE
// infoData.CHANGE24HOUR;
// infoData.CHANGEPCT24HOUR;
// infoData.CHANGEHOUR;
// infoData.CHANGEPCTHOUR
// infoData.HIGHHOUR
// infoData.LOWHOUR
