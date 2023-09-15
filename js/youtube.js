// Youtube Iframe API 쓰는 이유?
// <iframe> 태그만 써도 유튜브 영상 삽입이 가능한데 태그의 속성만으로 커스텀 하기에는 한계가 있음
// api를 사용하면 다양한 명령으로 동영상 제어 가능

// (참고) <iframe> 태그: HTML 문서 내에 다른 문서를 삽입하는데 사용
// (웹 페이지 내에 웹 페이지를 표시)

let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {  // 라이브러리가 이 함수의 이름을 찾아 실행하기에 임의로 바꾸면 안됨
  player = new YT.Player('player', {
    // height: '360',
    // width: '640',
    videoId: 'K0mzLB43wmk', // 최초 재생할 유튜브 영상 ID
    playerVars: { // 더 자세한 옵션은 플레이어 매개변수 확인
      autoplay: true, //자동 재생 유무
      loop: true, // 반복 재생 유무(아래 플레이리스트 옵션 필수)
      playlist: 'K0mzLB43wmk' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: { 
      // 'onReady': onPlayerReady,
      // 'onStateChange': 
      // 영상이 준비되었을 때 내가 작성한 함수를 실행해줌
      onReady: function (event) {
        // event.target: 재생되고 있는 영상 자체
        event.target.mute(); // 음소거!
      }
    }
  });
}

// 유튜브 섹션 위에 부유 요소 애니메이션 처리
// gsap.to(요소, 지속시간, 옵션: {})
// 옵션 참고: 
gsap.to('.floating1', 1.5, {
  delay: 1, // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정
  y: 15, // 수직으로 얼마나 움직일지 설정(translateY(수치); 와 같음)
  repeat: -1, // 몇 번 반복하는지를 설정, -1은 무한 반복
  yoyo: true, // 한 번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut // 타이밍 함수 적용, 느리게-빠르게-느리게
});
gsap.to('.floating2', 2, {
  delay: 0.5, 
  y: 15, 
  repeat: -1, 
  yoyo: true, 
  ease: Power1.easeInOut 
});
gsap.to('.floating3', 2.5, {
  delay: 1.5, 
  y: 20,
  repeat: -1, 
  yoyo: true,
  ease: Power1.easeInOut 
});
