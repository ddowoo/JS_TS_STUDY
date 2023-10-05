const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const abcCount = 26;

const getUpOrDown = (alphatbet) => {
  console.log(Math.min(abc.indexOf(alphatbet), abcCount - abc.indexOf(alphatbet)));
  return Math.min(abc.indexOf(alphatbet), abcCount - abc.indexOf(alphatbet));
};

const checkNearBy = (nameList, nowIndex, doneList) => {
  let leftCount = 0;
  let rightCount = 0;

  for (let i = nowIndex; i < nameList.length; i++) {
    const checkIndex = i > nameList.length ? i - nameList.length : i;
    if (checkIndex !== nowIndex) {
      if (nameList[checkIndex] !== "A" && !doneList.includes(checkIndex)) {
        rightCount = i - nowIndex;
        break;
      }
    }
  }

  nameList.reverse();

  for (let i = nowIndex; i < nameList.length; i++) {
    const checkIndex = i > nameList.length ? i - nameList.length : i;
    if (checkIndex !== nowIndex) {
      if (nameList[checkIndex] !== "A" && !doneList.includes(checkIndex)) {
        leftCount = i - nowIndex;
        break;
      }
    }
  }
  console.log("leftCount : ", leftCount, " rightCount : ", rightCount);

    return { count: Math.min(leftCount, rightCount) , nextIndex:}
};

function solution(name) {
    const nameList = name.split('');
    const nameDoneList = new Array(nameList.length).fill(0);

    function writeName() { 


        if (!nameDoneList.includes(0)) { 
            return Math.
        }
    }

}

solution("BABAAAB");
