const writeBtn = document.getElementById("writeBtn");
const result = document.querySelector(".result");
const idCount = new IdCount();

//[[[ create comment Tag  ]]]//
const createTag = (id, name, date, comment) => {
  let tag = `
<div class="result__userInfo">
  <div class="result__userImage">
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="50" height="50" rx="25" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0" transform="scale(0.005)" />
        </pattern>
        <image
          id="image0"
          width="200"
          height="200"
          xlink:href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  </div>
  <div class="result__userNameWrap">
    <button class="result__userName">${name}</button>
    <p class="result__time">${timeStamp(date)}</p>
  </div>
</div>
<p class="result__comment">${comment}</p>
<button class="result__delete">
  <span></span>
  <span></span>
</button>
`;

  const itemBox = document.createElement("div");
  itemBox.classList.add("result__item");
  itemBox.innerHTML = tag;
  itemBox.id = id;

  idCount.increase();

  return itemBox;
};

//[[[ create commentFilter Tag  ]]]//
const createFilterTag = (id, name, date, comment) => {
  let tag = `
<div id=${id} class="commentFilter__item">
  <div class="commentFilter__userInfo">
    <div class="commentFilter__userImage">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="50" height="50" rx="25" fill="url(#pattern0)" />
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0" transform="scale(0.005)" />
          </pattern>
          <image
            id="image0"
            width="200"
            height="200"
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAJ9klEQVR4Ae2d3XbrKAyFz/s/afgzBgzczpoyy+MTN4mTWIkEOxddrusoZuuLEALcPxUvKECgwB8CmzAJBSrAAgQkCgAsEllhFGCBARIFABaJrDAKsMAAiQIAi0RWGAVYYIBEAYBFIiuMAiwwQKIAwCKRFUYBFhggUQBgkcgKowALDJAoALBIZIVRgAUGSBQAWCSywijAAgMkCgAsEllhFGCBARIFABaJrDAKsMAAiQIA6y9ZSykppRCC9945Z4zRWquf1+Xn1Y611sYY55z3PoSQUiql/GVo+F8AVs05hxCcc1rrRs9rP7XWzrkQQs55eK4G3v6Vc/bevwnTLQS11t77kQkbLmKVUkIIxphbTJx73hgTQhiwoxwIrJzzNE3ncnPc2jRNQwWwIcDKOTvnjkNAd6VzbhC8OgerlPLFKHUL0Gmauu8cewYrhKCUuuXd755XSoUQOh489glWztla+110jny6tbbXnrFDsGKMbAPVnjalVIyxv9DVG1gMM6o9TPsz0zR1xlY/YJVSPlad2pPx/hljTE8ZfSdgLctCVEN/n5jjFrTWy7L0Ebp6AGtZFkFJ1X3OlFJ9sCUerJRSN1Q15pRSKSXpcUs2WD3Fqm0k6yBuCQarV6rWuCW6T5QKVs65g2x9G6X2x1prueVTqWCJrizsGbp1xhgjNNkSCZbQKugteu6fF1o7lQdWjPG+J/r7q8Q5H2Fg5Zw7Ky4c+RoopcQlW8LAErFm4Qgrz15jrZWVbEkCK4TwrD96ul7W+i0xYJVSBuwEt18MpZSgWWoxYA01EtzytD0WNEKUAVbOeavvyMdSsngZYDHZY8MBaOeciCxeAFgIV1dAiwhaAsBCdnUFlohMiztYGAxeUXW5XEQMD7mDNc/zXlmcmeeZeabFHazu18a89iXRWgOs1xVYluU13Ud4F/NlgKwjlvd+BERea6P3/vWvLP07WYOFfvAOc8x7Q75goXx1h6r2J84FLb5gDb6W4SFVl8uF83oHvmBhGuchW5ynd/iChQTrIVic0yymYJVSHsqKCy6XC9sVWkzBSimBmyMKsN2MzxQsZO5HqOKcvzMFC6XRg2CxLZMyBQtDwoNgsR0YMgVrkB30B+m5cxnbPfhMwUKt4Q5M2z+xrTgwBWvwnV5bdO4fK6XoJ5Rf+QSAdd9x3P8KsJ6jnrs/Od3fc8p+6mqmEYuT47jfy6dQee5zmIKFHOsgzugKn+MdYAGs54g5eDXKDQfBQrnhIFH/XYYC6UGwUCB9DixM6RwEC1M6z4GFSeiDYLHdbs90VIhlMwfBYrvsnSlYWOh3ECws9HuuK8TS5INgYWnyc2DVWlFxeMgW21pDrZVpV1hrxcDwIVhsh4SswUL+/hAstpk7a7Cwxf4hWNhi/3SC1d6ANOsOW5wTLNYRq9aKMukdsNjuz2lBgW/yXmvFg9fugIUHr73YD6I3vEMV836Qe1dYa8XDbX/FCw+3fStc1VrxOO49WHgc97tUtffjHwhcscV2RcPW36yT93ajKGhdgcW5fLWyJQAsTO9sweI8jbNSJSB5R9DaUnW5XESEKzFg1VqRaV0uFxHZVYsFMrpCDA+l/G+mtTcUA1atdfD1DpzXMqw8rQeSwKq1Wmuvco5BfrXWrj4TcSAMrJzzgJuklVJScvYVemFg1VpjjINEqbWZMcbVYVIO5IE12ghR0EhwC71IsGqtg+zBZ7uDfsvQr8dSwco5d7++VGstLrVaIZMKVlsG2HEir5RivpRvZejXA8FgdcyWdKokTen8+rWotaaUOotbSim2G+dveWF/XnbEau1ZlqUbtjqIVc0pPYDV+sQOcnmttei8ahu3OgGrzVKLrkEYY+SOAbdIdRWx1oYJXV0jtAq6yr4/6CdirW2LMQpKuZRSEmdsVrVvHXQIVq015yxiHYS1tqfubwtZn2C1FoYQ2IYupZSs9VVbaI4c9wxWy+gZZl3TNLF9Et8RaI5c0zlYTYKcM5PHuDnneu37rmgbAqwVry9Gr2maBkGqqT0QWK3BpZR5nj9WTdVaz/Pcfcd3Fa56mCvcN+ngmWVZvPdEhGmtvffdlNEPSrq9bLiItW18O845hxCcc29CprV2zoUQhury9nq2MwDrL2VKKSmleZ6naXLOGWO01urn1Vagt2OttTHGOTdN0zzPKaUBO7u/hNv9ArB2kuDEGQoArDNUhI2dAgBrJwlOnKEAwDpDRdjYKQCwdpLgxBkKAKwzVISNnQIAaycJTpyhAMA6Q0XY2CkwLlillGVZUkoxxnmevfetKGqtNT8v/fNqFdF1Xdf6a/tru9Ja24ql3vt5nmOMKaVlWUaumg4BVs650bPW01dQ1ie6EB0opbY1+hjjIBM+HYK1nZYxxnyMoeNoNtr6ng7qBKxlWU6ZSD4Ox7lXrhPY3SyIEAxWSsl7b61lGJPewU4pZa313oveaC8MrLbEpT+YboHYIJO4FEcGWCmlaZreXC91y3lSzmutp2mSEsb4glVKiTE65zrr6d7nWCnlnIsxci5ncASrxSfw9BBBpRTbGMYIrJwz3SL0h04SfUFbYs+qQsYCrBijiB3x/OGz1jJ5EsQ3wWohCl3e6bwqpbz33w1g3wErpYQQdTpPe4PW2m+NIj8NVoxR9OPR9s7jf8YY8/n+8UNgfXj/MX9nf/4OP7wnmxyshhQSqc+T9OsnKqU+s+WfFizOT6j6VfdBTn7g6VxUYIUQBp+B4c+o1pru4W/ngxVjBFL8qVrvUGtNkdqfCdayLBjxrQ6TdWCMOXcp2DlglVK++EwzWS7kfLcnPsPyBLDmecagjzMuT91bGzbuNt08feItsND3PeUzQRe/3zO+CFYpxXsvSCnc6gsKeO9fXvL1ClgpJYz7XvCTxLdorV+bbXwOLCTpEuF4/55fSOqfAAuB6n0PybXwbOg6ChYyKrlMnHjn3vuD48PHYOWcUfY80TfSTR38v4oPwMIssnQOKO7/yBz2TbCQp1O4pCeb9zP638FC99cTAXRtudMt/gJWSglTNHTO6MyyUurXQtc1WPM8d9ZyNOcDCszzfDVa/B+sUgqTf+r3ASHwEacr4JzbsvUfWKUU1BRO13o0g8aYdW7xX7CWZcHc32gQELVXa902yv5Bqk4k8bBmWzr/Z9j2o+GkCgAsUnnHNQ6wxvU9acsBFqm84xoHWOP6nrTlAItU3nGNA6xxfU/acoBFKu+4xgHWuL4nbTnAIpV3XOMAa1zfk7YcYJHKO65xgDWu70lbDrBI5R3XOMAa1/ekLQdYpPKOaxxgjet70pYDLFJ5xzUOsMb1PWnLARapvOMaB1jj+p605QCLVN5xjQOscX1P2nKARSrvuMYB1ri+J205wCKVd1zjAGtc35O2HGCRyjuucYA1ru9JWw6wSOUd1zjAGtf3pC3/Bw3HJ1RHUaHDAAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    </div>
    <div class="commentFilter__userNameWrap">
      <button class="commentFilter__userName">${name}</button>
      <p class="commentFilter__time">${date}</p>
    </div>
  </div>
  <p class="commentFilter__comment">${comment}</p>
  <button class="commentFilter__delete">
    <span></span>
    <span></span>
  </button>
</div>
`;

  return tag;
};

//[[[ comment default ]]]//
storageDATA.map((el) => {
  result.prepend(createTag(el.id, el.user, el.created_at, el.message));
});

//[[[ comment add ]]]//
writeBtn.addEventListener("click", () => {
  const writeInput = document.querySelector(".write__input");

  if (!isNaN(localStorage.getItem("id"))) return alert("로그인 먼저 해 ㅡㅡ");
  if (writeInput.value.trim() === "") return alert("댓글 안써??");

  const baseDATA = { id: idCount.getCount(), user: localStorage.getItem("id"), message: writeInput.value, created_at: new Date() };
  result.prepend(createTag(idCount.getCount(), baseDATA.user, baseDATA.created_at, baseDATA.message));
  storageDATA.push(baseDATA);
  localStorage.setItem("data", JSON.stringify([...storageDATA]));

  writeInput.value = "";
});

//[[[ comment event ]]]//
result.addEventListener("click", (e) => {
  const target = e.target;
  const targetClass = target.classList[0];
  const targetParent = target.parentNode;

  //[[[ comment remove ]]]//
  if (targetClass === "result__delete") {
    result.removeChild(targetParent);

    storageDATA.map((item, i) => {
      if (item.id === Number(targetParent.id)) {
        storageDATA.splice(i, 1);
      }
    });

    localStorage.setItem("data", JSON.stringify([...storageDATA]));
  }

  //[[ comment filter ]//
  if (targetClass === "result__userName") {
    const commentFilter = document.querySelector(".commentFilter");
    const commentFilterWrap = document.querySelector(".commentFilter__wrap");
    const commentDim = document.querySelector(".commentFilter__dim");

    commentFilter.classList.remove("commentFilter--off");

    const filter = storageDATA.filter((el) => {
      return el.user === target.textContent;
    });

    filter.map((el) => {
      commentFilterWrap.innerHTML += createFilterTag(el.id, el.user, el.created_at, el.message);
    });

    commentDim.addEventListener("click", () => {
      commentFilter.classList.add("commentFilter--off");
      commentFilterWrap.innerHTML = "";
    });
  }
});
