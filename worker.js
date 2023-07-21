self.onmessage = async (mssg) => {
  const now = performance.now();
  let f = mssg.data;
  console.log(f);
  let fs = new FileReader();
  fs.readAsBinaryString(f);
  fs.onloadend = function () {
    postMessage(fs.result);
  };
  let dat = await fetch(
    "https://random-data-api.com/api/bank/random_bank?size=100"
  );
  let dat1 = await fetch(
    "https://random-data-api.com/api/bank/random_bank?size=100"
  );
  let dat2 = await fetch(
    "https://random-data-api.com/api/bank/random_bank?size=100"
  );
  let dat3 = await fetch(
    "https://random-data-api.com/api/bank/random_bank?size=100"
  );
  let dat4 = await fetch(
    "https://random-data-api.com/api/bank/random_bank?size=100"
  );
  let dat5 = await fetch(
    "https://random-data-api.com/api/bank/random_bank?size=100"
  );
  let dat6 = await fetch(
    "https://random-data-api.com/api/bank/random_bank?size=100"
  );
  let dat7 = await fetch(
    "https://random-data-api.com/api/bank/random_bank?size=100"
  );
  let dat8 = await fetch(
    "https://random-data-api.com/api/bank/random_bank?size=100"
  );
  let dat9 = await fetch(
    "https://random-data-api.com/api/bank/random_bank?size=100"
  );
  let t = await dat.json();
  postMessage("");
};
