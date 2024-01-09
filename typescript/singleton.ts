interface Player {
  start: () => void;
  stop: () => void;
}

export const Player = (function () {
  // 비공개 프로퍼티 변수를 선언
  let instance: Player | undefined;
  let isPlaying = false;

  // 인스턴스를 생성할 private 메서드 역할을 한다.
  function getPlayer(): Player {
    return {
      start: function () {
        if (isPlaying === false) {
          console.log("음악을 틀자!");
          isPlaying = true;
        } else {
          console.log("이미 재생중!?");
        }
      },
      stop: function () {
        console.log("음악을 끄자!");
        isPlaying = false;
      },
    };
  }

  // 인스턴스를 생성할 public method 역할
  return {
    get: function () {
      //   인스턴스를 생성한 이후에는 새로 생성하지 않고 이미 생성된 객체를 반환한다.
      if (instance === undefined) {
        instance = getPlayer();
      }
      return instance;
    },
  };
})();

const melon = Player.get();
const vibe = Player.get();
console.log(melon.start()); // 음악을 틀자!
console.log(vibe.start()); // 이미 재생중!? // 멜론에서 음악을 틀었지만 isPlaying이 vibe에서도  ture
console.log(melon === vibe); // true
